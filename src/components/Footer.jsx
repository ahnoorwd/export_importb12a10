import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-6 md:px-20">
      {/* Logo and Brand */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Link to='/'>
              <img src={''} alt="GameHub Logo" className="w-12 h-12 object-contain" />

          </Link>
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Game<span className="text-indigo-400">Hub</span>
          </span>
        </div>

        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">About Us</a>
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Jobs</a>
          <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Press Kit</a>
        </nav>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start space-x-6 mb-6">
        <a href="#" className="hover:text-blue-400 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-current">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>

        <a href="#" className="hover:text-red-500 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-current">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>

        <a href="#" className="hover:text-blue-600 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-current">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-4 mb-4"></div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} GameHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
