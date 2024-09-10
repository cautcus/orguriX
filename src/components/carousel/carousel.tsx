"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "@/app/auth/firebase";
import { Carousel, Card } from "./apple-cards-carousel";

// Define the Product interface
interface Product {
  id: string;
  name: string;
  image: string;
  bgrimage: string;
  price: number;
  originalPrice: number;
  goto: string;
  color: string;
  size: string;
  rating: number;
  description: string;
}

// DummyContent component (used for product details)
const DummyContent = ({ product }: { product: Product }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        {product.description}
      </p>
      <Image
         src={product.bgrimage}
         alt={product.name}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
      <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
      <a href={product.goto}>Buy Now</a>
      </button>
    </div>
  );
};

// Main carousel demo component
export function AppleCardsCarouselDemo() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch product data from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList: Product[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const cards = products.map((product, index) => ({
    category: "Glass Bottle",
    title: product.name,
    src: product.image,
    content: <DummyContent product={product} />,
  }));

  const carouselItems = cards.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-green-300 font-sans">
        Discover Your Next Favorite Find...
      </h2>
      <Carousel items={carouselItems} />
    </div>
  );
}

export default AppleCardsCarouselDemo;
