"use client";
import Header from "@/components/offer/header";
import React, { useEffect, useState } from "react";
import { Topnav } from "@/components/navbar/topnav";
import Footer from "@/components/footer/Footer";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SpinnerLoader from '@/components/ui/loader';
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { CardA } from "@/components/cards/3dcard";
import { Reviews } from "@/components/review/review";
import { AppleCardsCarouselDemo } from "@/components/carousel/carousel";
import { Slider } from "@/components/banner/slider";
import Tawkto from "@/components/tawkto";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }


  return (
    <>
   {/* <Header/> */} {/* Popup Header */}

   {/* Common Components For Every Page */}
    <Tawkto/>
    <GoogleAnalytics/>
    <Topnav/>

    <Slider/>
    {/* <AppleCardsCarouselDemo/> */}
    <div className="mx-auto max-w-xl text-center pt-20" id="shop">
          <TextGenerateEffect words="Introducing Our Premier Line of Organic Essentials"/>
    </div>
    <CardA/>  
    <Reviews/>
    <Footer/> 
    </>
  );
}
