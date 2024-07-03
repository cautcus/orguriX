import React from "react";

export default function Banner() {
  return (
    <>
      {/* <section  style={{backgroundColor: '#85FFBD',backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'}}> */}
      <section
        class="bg-cover bg-center bg-custom h-full flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1561600920-6ed1e927b898?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              We Breathe New Life{" "}
              <strong className="font-extrabold text-green-500 sm:block">
                Into Discarded Plastics
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              By collecting, recycling, and crafting innovative products, we
              turn what was once waste into valuable, sustainable solutions.
              Join us in our mission to create a greener planet, one recycled
              product at a time.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-green-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                href="/donate"
              >
                Let's Clean
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
