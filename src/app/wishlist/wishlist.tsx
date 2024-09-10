// components/account/wishlist.tsx
import React, { useEffect, useState } from "react";
import { db, auth } from "@/app/auth/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  setDoc,
} from "firebase/firestore";
import NotifyAlert from "@/components/ui/alert";

const Wishlist = ({ onClose }: { onClose: () => void }) => {
  const [user, setUser] = useState<any>(null);
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const wishlistDoc = await getDoc(doc(db, "wishlists", user.uid));
        if (wishlistDoc.exists()) {
          setWishlistItems(wishlistDoc.data().items || []);
        } else {
          setWishlistItems([]);
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleDeleteWishlistItem = async (item: any) => {
    try {
      const wishlistRef = doc(db, "wishlists", user.uid);
      await updateDoc(wishlistRef, {
        items: arrayRemove(item),
      });
      setWishlistItems((prevItems) =>
        prevItems.filter((i) => i.id !== item.id)
      );
      setAlertMessage("Item deleted from wishlist successfully.");
      setShowAlert(true);
    } catch (error: any) {
      console.error("Error deleting wishlist item: ", error);
      setAlertMessage(error.message);
      setShowAlert(true);
    }
  };

  const handleMoveToCart = async (item: any) => {
    try {
      const cartRef = doc(db, "carts", user.uid);
      const cartDoc = await getDoc(cartRef);

      if (cartDoc.exists()) {
        await updateDoc(cartRef, {
          items: arrayUnion(item),
        });
      } else {
        await setDoc(cartRef, {
          items: [item],
        });
      }

      await handleDeleteWishlistItem(item);
      console.log("Item moved to cart successfully.");
      setAlertMessage("Item moved to cart successfully.");
      setShowAlert(true);
    } catch (error: any) {
      console.error("Error moving item to cart: ", error);
      setAlertMessage(error.message);
      setShowAlert(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-4 rounded-md shadow-md w-6/12	">
      
        {showAlert && (
            <NotifyAlert alertMessage={alertMessage} setShowAlert={setShowAlert} />
        )}

        <h3 className="text-4xl font-bold mb-4 text-white">Your Favourites</h3>
        {user ? (
          <div>
            {wishlistItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {wishlistItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-neutral-950 rounded-xl flex items-center justify-between"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg mr-4"
                    />
                    <div className="flex-grow">
                      <a
                        href={item.goto}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-green-200 hover:underline"
                      >
                        {item.name}
                      </a>
                      <p className="text-sm text-gray-500">
                        Price:{" "}
                        <span className="line-through">₹{item.price}</span> ₹
                        {item.originalPrice}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleMoveToCart(item)}
                        className="px-4 py-2 bg-white text-black font-semibold rounded-lg mr-2"
                      >
                        Move to Cart
                      </button>
                      <button
                        onClick={() => handleDeleteWishlistItem(item)}
                        className="px-4 py-2 bg-black text-white font-semibold rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-green-200 text-2xl font-bold m-8">
                Your wishlist is empty.
              </p>
            )}
          </div>
        ) : (
          <p className="text-green-200 text-2xl font-bold m-8">
            You are not logged in..
          </p>
        )}
        <button
          className="mt-4 text-sm text-green-500 hover:text-green-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
