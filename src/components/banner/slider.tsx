"use client";
import { Carousel } from "./images-slider";

export function Slider() {
  const images = [ "/img/slider/1.png","/img/slider/2.png","/img/slider/3.jpg","/img/slider/4.jpg","/img/slider/5.jpg","/img/slider/6.jpg"];

  const slideData = [
    {
      title: "Mystic Bottle",
      button: "Explore",
      src: "/img/slider/1.png",
    },
    {
      title: "Leafy Greens",
      button: "Explore",
      src: "/img/slider/2.png",
    },
    {
      title: "Uplift Interior",
      button: "Explore",
      src: "/img/slider/3.jpg",
    },
    {
      title: "Aqua Blue",
      button: "Explore",
      src: "/img/slider/4.jpg",
    },
    {
      title: "Colorful Options",
      button: "Explore",
      src: "/img/slider/5.jpg",
    },
    {
      title: "Rise and Shine",
      button: "Explore",
      src: "/img/slider/6.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 mt-8">
      <Carousel slides={slideData} />
    </div>
  );
}
