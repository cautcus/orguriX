import React from "react";

export default function Banner() {
  return (
    <>
      <section  style={{backgroundColor: '#85FFBD',backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'}}>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
             We Breathe New Life
              <strong className="font-extrabold text-red-700 sm:block">
              Into Discarded Plastics
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
            By collecting, recycling, and crafting innovative products, we turn what was once waste into valuable, sustainable solutions. Join us in our mission to create a greener planet, one recycled product at a time. 
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/"
              >
                Donate Now
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
