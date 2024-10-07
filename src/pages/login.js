import React from 'react';


function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          <span className="text-orange-400">Mega</span>
          <span className="text-blue-400"> Personals</span>
        </h1>
        <p className="text-gray-400 text-lg">personals classifieds</p>
        <div className="mt-6">
          <p className="text-gray-600">Is this your first time posting?</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
            Start Here
          </button>
        </div>
        <div className="mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <input
            className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-xs"
            placeholder="Email"
            type="email"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-xs"
            placeholder="Password"
            type="password"
          />
          <div className="flex items-center justify-center mt-2">
            <img
              alt="CAPTCHA image"
              className="border border-gray-300 rounded"
              height="30"
              src="https://storage.googleapis.com/a1aa/image/aSErp0fn1hx1AKeN7IOj1rMIpFOKU3HPwDQLkvRYUeEyKOInA.jpg"
              width="100"
            />
            <i className="fas fa-sync-alt text-blue-500 ml-2 cursor-pointer"></i>
          </div>
          <input
            className="border border-gray-300 rounded py-2 px-4 mt-2 w-full max-w-xs"
            placeholder="Enter code from the picture"
            type="text"
          />
          <button className="bg-orange-400 text-white py-2 px-4 rounded mt-4">
            SUBMIT
          </button>
        </div>
        <div className="mt-6 bg-yellow-200 border border-black p-4 rounded">
          <p className="font-bold">DON'T GET SCAMMED!</p>
          <p>
            Is the address up top:
            <span className="font-bold"> megapersonals.eu</span>?
          </p>
        </div>
        <a className="text-blue-500 mt-4 block" href="#">
          FORGOT PASSWORD?
        </a>
        <div className="mt-4 text-gray-600">
          <a className="hover:underline" href="#">
            Home
          </a>
          |
          <a className="hover:underline" href="#">
            Manage Posts
          </a>
          |
          <a className="hover:underline" href="#">
            Contact Us
          </a>
          |
          <a className="hover:underline" href="#">
            Policies & Terms
          </a>
        </div>
        <p className="text-gray-600 mt-4">
          Copyright ©2022 MegaPersonals.eu
        </p>
      </div>
    </div>
  );
}

export default App;
