import { React, useState } from "react";
import { useForm } from "@formspree/react";
import Plant from "../img/plant-svg.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

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
  const [state, handleSubmit] = useForm("xeojoapw"); // Replace with your Formspree endpoint
  const [token, setToken] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: ''
  });

  // Function to generate a random alphanumeric token (for demonstration)
  const generateToken = () => {
    return Math.random().toString(36).substr(2, 10); // Generates a random alphanumeric token
  }

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Generate token ID
    const generatedToken = generateToken();

    // Prepare form data with token ID and other form fields
    const submitFormData = {
      ...formData,
      token: generatedToken
    };

    try {
      // Call handleSubmit from useForm hook with formData
      const submitResponse = await handleSubmit(submitFormData);

      // Check for success
      if (submitResponse.succeeded) {
        console.log('Form submitted successfully');
        // Handle success state or redirect
      } else {
        console.error('Form submission failed:', submitResponse.message);
        // Handle error state
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      // Handle error state
    }

    // Display token ID to the user (optional)
    setToken(generatedToken);
  }

  if (state.succeeded) {
    return (
      <>
        <div class="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl">
    <div class="w-full h-full text-center">
        <div class="flex flex-col justify-between h-full">

    <svg className="w-12 h-12 m-auto mt-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path style={{ fill: '#F9AB9B' }} d="M280.377,179.723H219.1c-8.401,0-16.091-4.717-19.898-12.207l-2.346-4.615 c-1.593-3.134-2.423-6.599-2.423-10.114V98.484c0-12.328,9.994-22.321,22.321-22.321h63.624c12.328,0,22.321,9.994,22.321,22.321 v58.919c0,11.855-9.267,21.642-21.105,22.288l0,0C281.188,179.713,280.783,179.723,280.377,179.723z"></path>
        <path style={{ fill: '#FFBCAB' }} d="M259.814,150.234v11.363c0,10.01,8.115,18.125,18.125,18.125h55.104h23.482 c6.675,0,12.086-5.411,12.086-12.086v-24.019c0-7.136-6.481-12.517-13.494-11.205L259.814,150.234z"></path>
        <path style={{ fill: '#F29E91' }} d="M256.533,34.279h84.476c3.926,0,7.388,2.571,8.524,6.329l22.104,73.153 c0.801,2.651,0.17,5.529-1.668,7.602l-25.602,28.873h-46.844L256.533,34.279z"></path>
        <path style={{ fill: '#F9AB9B' }} d="M263.778,150.234h46.844l25.199-28.419c2.089-2.355,2.805-5.624,1.895-8.637L315.567,39.88 c-1.005-3.326-4.07-5.602-7.544-5.602h-85.235l43.353,57.978L263.778,150.234z"></path>
        <path style={{ fill: '#FFBCAB' }} d="M199.931,108.846c1.31-11.741,11.017-20.725,22.82-21.214c0.014-0.001,0.026-0.001,0.038-0.002 h24.225l10.41,25.842h-12.362c-11.858,0-21.471,9.612-21.471,21.471v15.292h46.844l24.505-27.636 c2.519-2.842,3.385-6.787,2.286-10.421L273.69,34.279h-91.087l-48.998,42.215L7.604,327.308v62.444 c0,0,65.088,54.935,149.239,54.935s151.579-33.035,151.579-33.035l66.069,66.069h129.904V188.914 c-66.763,0-114.148,51.494-114.148,51.494c-91.263-25.056-115.491,63.113-115.491,63.113s-18.784-50.2-69.479-50.2 s-72.338,45.605-72.338,45.605l61.492-140.792L199.931,108.846z"></path>
        <g>
          <path style={{ fill: '#F9AB9B' }} d="M260.76,309.43c5.064,0.787,10.447-0.2,13.998-5.908c-16.099-36.389-44.12-49.941-69.277-49.941 c-5.018,0-9.746,0.453-14.202,1.258c30.422,5.829,46.693,30.444,52.928,42.389C247.553,303.637,253.615,308.319,260.76,309.43z"></path>
          <path style={{ fill: '#F9AB9B' }} d="M300.258,407.024c-11.034-8.777-26.403-9.553-38.302-1.989 c-23.407,14.878-66.387,37.132-116.969,39.537c3.972,0.244,7.992,0.375,12.059,0.375c56.866,0,123.173-19.709,149.903-32.6 L300.258,407.024z"></path>
          <polygon style={{ fill: '#F9AB9B' }} points="201.173,103.469 119.132,298.926 132.941,298.926 194.432,158.134 213.76,112.06 "></polygon>
          <path style={{ fill: '#F9AB9B' }} d="M505.734,242.019c0,0-42.769,10.982-42.769,72.692s27.717,83.674,27.717,83.674 s-49.158,49.802-49.158,73.536h64.21L505.734,242.019L505.734,242.019z"></path>
        </g>
        <path d="M504.396,181.31c-60.018,0-104.368,38.809-116.491,50.638c-48.276-11.705-78.346,7.199-95.212,25.461 c-8.824,9.554-14.916,19.801-18.905,28.012c-2.417-3.758-5.416-7.89-9.048-12.021c-15.922-18.111-36.483-27.683-59.461-27.683 c-19.439,0-34.921,6.011-46.858,13.867l36.531-83.644l3.674,7.229c1.297,2.552,3.917,4.159,6.779,4.159h54.409h21.17h87.626 c4.199,0,7.604-3.405,7.604-7.604v-49.834c0-1.172-0.273-2.277-0.746-3.269l3.147-3.549c1.751-1.975,2.353-4.717,1.589-7.245 l-25.306-83.748c-0.969-3.209-3.927-5.405-7.279-5.405h-33.744H273.69h-17.157h-33.744h-40.186c-1.822,0-3.583,0.654-4.964,1.843 l-48.998,42.215c-0.759,0.655-1.382,1.452-1.831,2.347L0.809,323.895C0.277,324.953,0,326.123,0,327.308v62.444 c0,2.24,0.988,4.367,2.7,5.81c2.745,2.317,68.201,56.728,154.144,56.728c72.853,0,132.633-23.857,149.947-31.517l62.326,62.325 c1.426,1.427,3.36,2.227,5.377,2.227h129.902c4.199,0,7.604-3.405,7.604-7.604V188.914C512,184.715,508.595,181.31,504.396,181.31z M361.008,172.119h-80.022h-13.566v-14.28h3.018h27.085h13.101h33.744c2.176,0,4.246-0.932,5.69-2.559l10.951-12.35L361.008,172.119 L361.008,172.119z M364.419,116.161l-23.472,26.471h-13.418l17.343-19.559c1.751-1.975,2.353-4.717,1.589-7.245l-22.343-73.944 h17.857L364.419,116.161z M330.675,116.161l-23.472,26.471h-9.68h-10.18l17.343-19.559c1.752-1.975,2.353-4.717,1.59-7.245 l-22.344-73.944h24.299L330.675,116.161z M496.792,470.118h-119.15l-63.843-63.843c-2.297-2.296-5.802-2.879-8.719-1.454 c-0.66,0.322-66.961,32.261-148.238,32.261c-70.907,0-128.709-41.08-141.635-51.006v-56.967L139.718,81.264l45.708-39.38h37.363 h33.744h11.511l22.444,74.278l-23.472,26.471h-3.238h-32.582v-7.688c0-7.647,6.22-13.867,13.867-13.867h12.362 c2.527,0,4.888-1.255,6.302-3.349c1.414-2.094,1.695-4.753,0.751-7.097l-10.41-25.842c-0.036-0.09-0.082-0.174-0.122-0.263 c-0.011-0.024-0.022-0.049-0.033-0.072c-0.961-2.09-2.764-3.549-4.841-4.135c-0.004-0.001-0.008-0.002-0.011-0.003 c-0.223-0.063-0.449-0.116-0.678-0.158c-0.043-0.008-0.086-0.014-0.129-0.021c-0.193-0.032-0.387-0.058-0.583-0.075 c-0.075-0.007-0.15-0.01-0.226-0.015c-0.165-0.01-0.329-0.015-0.496-0.014c-0.046,0-0.089-0.005-0.135-0.004 c-1.685,0.044-27.537,0.022-44.504-0.002c-0.004,0-0.007,0-0.011,0c-4.194,0-7.598,3.397-7.604,7.593 c-0.006,4.199,3.393,7.609,7.593,7.615c2.78,0.004,19.39,0.027,31.636,0.027c3.009,0,5.754-0.001,7.965-0.005l4.274,10.612h-1.101 c-16.032,0-29.075,13.042-29.075,29.075v15.292c0,4.199,3.405,7.604,7.604,7.604h28.619v14.28h-42.14l-8.86-17.43 c-1.333-2.623-4.081-4.246-7.001-4.155c-2.941,0.085-5.568,1.86-6.746,4.557l-61.49,140.791c-1.663,3.806,0.036,8.242,3.816,9.963 c3.778,1.722,8.241,0.092,10.022-3.659c0.196-0.413,20.106-41.261,65.468-41.261c44.66,0,61.662,43.43,62.358,45.262 c1.156,3.088,4.168,5.088,7.463,4.931c3.294-0.148,6.117-2.402,6.991-5.581c0.056-0.203,5.752-20.459,21.776-37.809 c21.094-22.841,49.479-29.565,84.37-19.987c2.746,0.754,5.681-0.089,7.608-2.184c0.433-0.47,42.212-45.148,100.948-48.801v273.361 H496.792z"></path>
      </g>
    </svg>
            <p class="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
            <span className='font-bold text-green-800'> You're a Plastic Hero! </span>
            Thanks a Ton for Changing the World!
            </p>
            <div className="m-5">
              <h2 className="text-lg font-semibold text-green-600">Your Token ID:</h2>
              <p className="text-small font-medium">{token}</p>
            </div>
            <div class="flex items-center justify-between w-full gap-4 mt-8">
                <a href="/" type="button" class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Close
                </a>
            </div>
        </div>
    </div>
</div>

      </>
    );
  }


  // JSX for rendering the form
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
              Please fill out the form below
            </p>
          </div>
          <div className="mt-12 mx-auto px-4 p-8 bg-gray-900 sm:max-w-lg sm:px-8 sm:rounded-xl">
            <form className="space-y-5" onSubmit={handleFormSubmit}>
              <div>
                <label className="font-medium text-green-400" htmlFor="name">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="font-medium text-green-400" htmlFor="number">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="font-medium text-green-400" htmlFor="address">
                  Address
                </label>
                <textarea
                  required
                  className="w-full text-white mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
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
      </main>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
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
