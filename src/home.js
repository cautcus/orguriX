import React from "react";
import Donate from "./components/donate";
// import Slider from "./components/slider";
// import Feature from "./components/feature";
// import Product from "./components/product";
// import Collection from "./components/collection";
// import Review from "./components/faq";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Donate />
      <Navbar/>
      <Banner/>
      {/* <Slider />
      <Collection />
      <Feature />
      <Product />
      <Review /> */}
      <Footer />
    </>
  );
}
