import React from "react";
import { Link } from "react-router";
import logo from "../assets/importexport.avif";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-6 md:px-20">
      {/* Logo and Brand */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src={logo}
              alt="GameHub Logo"
              className="w-12 h-12 object-contain rounded-full"
            />
          </Link>
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Game<span className="text-indigo-400">Hub</span>
          </span>
        </div>

        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Jobs
          </a>
          <a
            href="#"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Press Kit
          </a>
        </nav>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start space-x-6 mb-6">
        <a
          href="#"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M18.146 2H21L14.326 9.53 22 22h-7.034l-4.44-6.78L5.5 22H3l7.098-7.93L2 2h7.145l4.116 6.248L18.146 2zm-2.467 18h1.536L7.09 4h-1.6l10.189 16z" />
          </svg>
        </a>

        <a
          href="#"
          className="hover:text-red-500 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>

        <a
          href="#"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-4 mb-4"></div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Import & Export. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
