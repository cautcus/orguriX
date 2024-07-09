import { React, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Plant from "../img/plant-svg.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Success from "../components/success";

const Banner = ({ onToggle }) => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
        <div className="flex-none space-y-5 max-w-xl">
          <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
            Craft Your Impact,{" "}
            <span className="text-red-700">Donate Plastic!</span>
          </h1>
          <p>
            Join us in making a difference. Donate your plastic waste and help
            us create a cleaner, greener future. Your contribution is the first
            step towards a sustainable tomorrow. Together, we can shape a better
            world!
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <button
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-green-800 duration-150 hover:bg-green-700 active:bg-green-900 rounded-full md:inline-flex"
              onClick={onToggle}
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <a
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
              href="mailto:orgurix.in@gmail.com"
            >
              Contact sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 mt-7 lg:mt-0 lg:ml-3 ">
          <img src={Plant} className=" mx-auto" alt="plant" />
        </div>
      </div>
    </section>
  );
};

const Form = () => {
  const [state, handleSubmit] = useForm("xzzpbgen");
  if (state.succeeded) {
    return (
      <>
        <Success/>
      </>
    );
  }
  return (
    <>
      <main className="relative pb-28 pt-4">
        <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
          <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
            <h3 className="text-green-600 font-semibold">Recycle</h3>
            <p className="text-green-900 text-3xl font-semibold sm:text-4xl">
              Be A Hero
            </p>
            <p className="text-gray-500">
              Please fill out the form bellow
            </p>
          </div>
          <div className="mt-12 mx-auto px-4 p-8 bg-gray-900 sm:max-w-lg sm:px-8 sm:rounded-xl">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="font-medium text-green-400" htmlFor="name">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label className="font-medium text-green-400" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label className="font-medium text-green-400" htmlFor="number">
                  Mobile Number
                </label>
                <input
                  type="number"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  name="number"
                />
                <ValidationError
                  prefix="Number"
                  field="number"
                  errors={state.errors}
                />
              </div>
              <div>
                <label className="font-medium text-green-400" htmlFor="message">
                  Address
                </label>
                <textarea
                  required
                  className="w-full text-white mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                className="w-full px-4 py-2 text-white font-medium bg-green-800 hover:bg-green-700 active:bg-green-900 rounded-lg duration-150"
                type="submit"
                disabled={state.submitting}
              >
                Clean
              </button>
            </form>
          </div>
        </div>
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </main>
    </>
  );
};

export default function Donation() {
  const [showComponentOne, setShowComponentOne] = useState(true);

  const handleToggle = () => {
    setShowComponentOne(!showComponentOne);
  };

  return (
    <>
        
        <div className="relative bg-green-200">
        <div
          className="absolute inset-0 blur-xl h-[580px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div>
        <div className="relative"><Navbar/></div>
        <div className="relative pb-24">
          {showComponentOne ? <Banner onToggle={handleToggle} /> : <Form />}
        </div>
      </div>
      <Footer />
    </>
  );
}
