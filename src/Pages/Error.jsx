import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black overflow-hidden">
        {/* Glowing background shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>

        {/* Glassmorphism Card */}
        <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 text-center max-w-md w-[90%]">
          <h1 className="text-[120px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 drop-shadow-md">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-300 mb-8">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/40 transition-transform duration-300 hover:-translate-y-1"
          >
            Go Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Error;
