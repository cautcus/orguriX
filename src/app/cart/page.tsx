"use client";

import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}
import { auth, db } from "@/app/auth/firebase";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";
import { Topnav } from "@/components/navbar/topnav";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Footer from "@/components/footer/Footer";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SpinnerLoader from '@/components/ui/loader';
import Script from "next/script";
import NotifyAlert from "@/components/ui/alert";

interface CartItem {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  price: number;
  color: string;
  size: string;
  rating: number;
  goto: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const cartDoc = doc(db, "carts", user.uid);
          const cartSnapshot = await getDoc(cartDoc);

          if (cartSnapshot.exists()) {
            setCartItems(cartSnapshot.data().items || []);
            calculateTotal(cartSnapshot.data().items || []);
          } else {
            setCartItems([]);
            setTotalPrice(0);
          }
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setAlertMessage("Error fetching cart items.");
        setShowAlert(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleDeleteItem = async (itemId: string) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const cartDoc = doc(db, "carts", user.uid);

        const cartSnapshot = await getDoc(cartDoc);
        if (cartSnapshot.exists()) {
          const items = cartSnapshot.data().items || [];
          const itemToRemove = items.find((item: CartItem) => item.id === itemId);

          if (itemToRemove) {
            await updateDoc(cartDoc, {
              items: arrayRemove(itemToRemove),
            });

            const updatedItems = cartItems.filter((item) => item.id !== itemId);
            setCartItems(updatedItems);
            calculateTotal(updatedItems);
            setAlertMessage("Item removed successfully");
            setShowAlert(true);
          }
        }
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
      setAlertMessage("Error deleting cart item.");
      setShowAlert(true);
    }
  };

  const calculateTotal = (items: CartItem[]) => {
    const total = items.reduce((acc, item) => acc + item.price * 1, 0);
    setTotalPrice(total);
  };

  const handleCheckout = () => {
    if (window.Razorpay) {
      const options = {
        key: "rzp_live_36XfwVizT73ce5", // Replace with your Razorpay Key
        amount: totalPrice * 100, // Razorpay expects amount in paise
        currency: "INR", // Or the currency you're using
        name: "Orgurix",
        description:  `
        Order Details:
        ${cartItems.map((item) => `
          - Name: ${item.name}
          - Price: ₹${item.price}
          - Quantity: 1
          - Color: ${item.color}
          - Size: ${item.size}
          - Rating: ${item.rating}`).join("\n")}
        Total Price: ₹${totalPrice}
      `,
        image: "/img/logo.png",
        handler: function (response: any) {
          console.log(response);
          // You can handle further actions here, like saving the payment response
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "customer_contact_number"
        },
        theme: {
          color: "#11292c"
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
    } else {
      console.error("Razorpay SDK is not loaded");
    }
  };

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <GoogleAnalytics />
      <Topnav />
      <div className="h-screen pt-20">
        <div className="mx-auto max-w-5xl pt-8 text-left">
          {showAlert && (
            <NotifyAlert alertMessage={alertMessage} setShowAlert={setShowAlert} />
          )}
          <TextGenerateEffect words="Shopping Cart" />
        </div>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item) => (
              <div key={item.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={item.image} alt={item.name} className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                    <p className="mt-1 text-xs text-gray-700">
                      <span className="line-through">₹{item.originalPrice}</span> ₹{item.price}
                    </p>
                    <p className="mt-1 text-xs text-gray-700">
                      {item.color} / {item.size}
                    </p>
                    <p className="mt-1 text-xs text-gray-700">
                      Rating: {item.rating}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">₹{item.price}</p>
                      <button onClick={() => handleDeleteItem(item.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div>
                <p className="mb-1 text-lg font-bold">₹{totalPrice}</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="px-8 py-2 mt-6 w-full bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
