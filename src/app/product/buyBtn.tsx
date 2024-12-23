import React, { useEffect } from 'react';

interface RazorpayButtonProps {
  buttonId: string; // This will accept a dynamic Razorpay button ID
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({ buttonId }) => {
  useEffect(() => {
    // Dynamically create the form and script tag
    const form = document.createElement('form');
    const script = document.createElement('script');

    // Set the attributes for the Razorpay script with the dynamic button ID
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', buttonId); // Use the prop value here
    script.async = true;

    // Append the script to the form
    form.appendChild(script);

    // Append the form to the container div
    document.getElementById('razorpay-container')?.appendChild(form);

    return () => {
      // Cleanup the script and form on component unmount
      document.getElementById('razorpay-container')?.removeChild(form);
    };
  }, [buttonId]); // Depend on buttonId prop to re-run effect if it changes

  return <div id="razorpay-container"></div>;
};

export default RazorpayButton;
