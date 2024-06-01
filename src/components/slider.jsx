import React from 'react';
import { Carousel } from "flowbite-react";

export default function Slider() {
  return (
    <>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src="https://source.unsplash.com/random" alt="..." />
        <img src="https://source.unsplash.com/random" alt="..." />
        <img src="https://source.unsplash.com/random" alt="..." />
        <img src="https://source.unsplash.com/random" alt="..." />
        <img src="https://source.unsplash.com/random" alt="..." />
      </Carousel>
    </div>
    </>
  );
}
