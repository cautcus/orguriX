"use client";
import React from "react";

type ModernAlertProps = {
  alertMessage: string;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

const NotifyAlert = ({ alertMessage, setShowAlert }: ModernAlertProps) => {
  return (
    <div
    className="fixed bottom-4 left-4 bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg shadow-md max-w-sm w-full z-50"
    role="alert"
  >
    <div className="flex justify-between items-center">
      <span className="text-base font-medium">{alertMessage}</span>
      <button
        className="ml-4 p-2 rounded-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        onClick={() => setShowAlert(false)}
      >
        <svg
          className="w-6 h-6 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 6.36 5.652a.5.5 0 1 0-.707.707L9.293 10l-3.64 3.641a.5.5 0 0 0 .707.707L10 10.707l3.641 3.641a.5.5 0 0 0 .707-.707L10.707 10l3.641-3.641a.5.5 0 0 0 0-.707z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
  );
};

export default NotifyAlert;
