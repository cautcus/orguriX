import React from "react";

const PageNotFound = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <img
          src="https://images.unsplash.com/photo-1585495596846-f2818568f1a5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-3/5 w-full object-cover"
        />

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-green-900 sm:text-4xl">
            Oops!
            </h1>

            <p className="mt-4 text-black">
            It looks like we've hit a pollution snag.
            </p>

            <a
              href="/"
              className="mt-6 inline-block rounded bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring"
            >
              Go Green
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
