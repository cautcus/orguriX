"use client";

import React, { useState, useEffect } from "react";
import { db, auth } from "@/app/auth/firebase";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { Input } from "@/components/login/input";
import { Label } from "@/components/login/label";
import { TrashIcon } from "@heroicons/react/outline";
import NotifyAlert from "@/components/ui/alert";


const SavedAddress = ({ onClose }: { onClose: () => void }) => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",  
    country: "",
  });
  const [savedAddresses, setSavedAddresses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  useEffect(() => {
    const fetchAddresses = async () => {
      setLoading(true);
      const user = auth.currentUser;
      if (user) {
        const addressesRef = doc(db, "addresses", user.uid);
        const addressesDoc = await getDoc(addressesRef);
        if (addressesDoc.exists()) {
          setSavedAddresses(addressesDoc.data().addresses || []);
        }
      }
      setLoading(false);
    };

    fetchAddresses();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error("No user is logged in.");
        setAlertMessage("No user is logged in.");
      setShowAlert(true);
        return;
      }

      const addressesRef = doc(db, "addresses", user.uid);
      const addressesDoc = await getDoc(addressesRef);
      let addresses = addressesDoc.exists() ? addressesDoc.data().addresses || [] : [];

      addresses.push(address);

      await setDoc(addressesRef, { addresses });

      console.log("Address saved successfully.");
      setAlertMessage("Address saved successfully.");
      setShowAlert(true);
      setAddress({
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      });
      setSavedAddresses(addresses);
    } catch (error:any) {
      console.error("Error saving address: ", error);
      setAlertMessage(error.message);
      setShowAlert(true);
    }
  };

  const handleRemoveAddress = async (index: number) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error("No user is logged in.");
        setAlertMessage("No user is logged in.");
      setShowAlert(true);
        return;
      }

      const addressesRef = doc(db, "addresses", user.uid);
      const addressesDoc = await getDoc(addressesRef);
      let addresses = addressesDoc.exists() ? addressesDoc.data().addresses || [] : [];

      addresses.splice(index, 1);

      await setDoc(addressesRef, { addresses });

      setSavedAddresses(addresses);
      console.log("Address removed successfully.");
    } catch (error:any) {
      console.error("Error removing address: ", error);
      setAlertMessage(error.message);
      setShowAlert(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-neutral-950 p-6 rounded-2xl shadow-md w-3/4 max-w-4xl flex">
        <div className="w-1/3 p-4 border-r border-gray-700">
        <div>  {showAlert && (
            <NotifyAlert alertMessage={alertMessage} setShowAlert={setShowAlert} />
        )}</div>
          <h2 className="text-green-200 text-lg font-bold mb-4">Enter Your Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="street">Street</Label>
              <Input
                id="street"
                name="street"
                type="text"
                value={address.street}
                onChange={handleChange}
                required
                placeholder="123 Main St"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                type="text"
                value={address.city}
                onChange={handleChange}
                required
                placeholder="City"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                type="text"
                value={address.state}
                onChange={handleChange}
                required
                placeholder="State"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="zip">ZIP Code</Label>
              <Input
                id="zip"
                name="zip"
                type="text"
                value={address.zip}
                onChange={handleChange}
                required
                placeholder="ZIP Code"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                type="text"
                value={address.country}
                onChange={handleChange}
                required
                placeholder="Country"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] w-full font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Save Address
            </button>
          </form>
        </div>
        <div className="w-2/3 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-green-200">Saved Addresses</h3>
            <button onClick={onClose}>
              <p className="h-6 w-6 text-green-500 hover:text-green-200 font-extrabold" >X</p>
            </button>
          </div>
          {loading ? (
            <div/>
          ) : (
            <div className="space-y-4">
              {savedAddresses.map((address, index) => (
                <div
                  key={index}
                  className="bg-black p-4 rounded-3xl flex justify-between items-center"
                >
                  <div>
                    <p className="text-neutral-200 p-2 italic">{address.street}, {address.city}, {address.state}, {address.zip}, {address.country}</p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-300"
                    onClick={() => handleRemoveAddress(index)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedAddress;
