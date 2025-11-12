import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100 text-center px-6">
      <img
        src="https://i.ibb.co.com/pB8YrW8L/App-Error.png"
        alt="Error Illustration"
        className="w-72 md:w-96 mb-6"
      />

      <p className="text-gray-600 mt-4 text-lg max-w-md">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-md hover:from-orange-600 hover:to-orange-700 hover:shadow-lg transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
