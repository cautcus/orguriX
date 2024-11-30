import { useState, useEffect } from 'react';

function Popup() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // Optionally, you can add a delay to show the popup after some time.
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay before showing the popup

    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, []);

  return (
    isVisible && (
      <>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          {/* Popup Box */}
          <div className="bg-white p-6 rounded-lg w-11/12 sm:w-1/3 shadow-lg transform scale-100 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Transform Waste into Art with Orgurix 🌱
            </h2>
            <p className="text-md text-gray-600 text-center mb-6">
              Join us to create sustainable products, earn passive income, and make a positive impact.
            </p>
            <a
              href="https://forms.gle/AMT6WB9YciYKWeEDA"
              className="block text-center bg-teal-800 text-white py-2 rounded-lg font-semibold transition-all hover:bg-teal-500 mb-4"
            >
              Join Now
            </a>
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-600 text-2xl bg-white p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-all"
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        </div>
      </>
    )
  );
}

export default Popup;
