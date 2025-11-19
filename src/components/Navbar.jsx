import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from '../assets/importexport.avif'
import { AuthContext } from "../Authprovider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const Navbar = () => {
    const { user, logout } = use(AuthContext);
  
  const handlelogout = () => {
    logout()
      .then(() => {
        Swal.fire({
                      title: "Loged-Out",
                      text: "Logout Successfully",
                      icon: "success",
                    });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>

   
      <li>
        <NavLink
         to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "text-white common-bg gradient-animate shadow-md shadow-indigo-500/40"
                : "text-gray-300 hover:text-white hover:bg-gray-800/60 hover:shadow-lg hover:shadow-indigo-500/30"
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allproducts"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "text-white common-bg gradient-animate shadow-md shadow-indigo-500/40"
                : "text-gray-300 hover:text-white hover:bg-gray-800/60 hover:shadow-lg hover:shadow-indigo-500/30"
            }`
          }
        >
         All Products
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/myexports'
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "text-white common-bg gradient-animate shadow-md shadow-indigo-500/40"
                : "text-gray-300 hover:text-white hover:bg-gray-800/60 hover:shadow-lg hover:shadow-indigo-500/30"
            }`
          }
        >
          My Exports
        </NavLink>
      </li>


    
      <li>
        <NavLink
         to='/myimports'
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "text-white common-bg gradient-animate shadow-md shadow-indigo-500/40"
                : "text-gray-300 hover:text-white hover:bg-gray-800/60 hover:shadow-lg hover:shadow-indigo-500/30"
            }`
          }
        >
          My Import
        </NavLink>
      </li>
      <li>
        <NavLink
         to='/addexports'
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "text-white common-bg gradient-animate shadow-md shadow-indigo-500/40"
                : "text-gray-300 hover:text-white hover:bg-gray-800/60 hover:shadow-lg hover:shadow-indigo-500/30"
            }`
          }
        >
          Add Export
        </NavLink>
      </li>
    
   
      


    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 shadow-lg">
      <div className="navbar  px-4 md:px-8 lg:px-12 text-white">
        {/* Left Section */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white hover:bg-gray-800/60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gray-900/90 text-white rounded-xl z-10 mt-3 w-52 p-2 shadow-lg border border-gray-700"
            >
              {links}
            </ul>
          </div>

          {/* Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={logo}
              alt="Game Hub Logo"
              className="hidden sm:block w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              Import<span className="text-indigo-400">Export</span>
            </span>
          </Link>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end space-x-3">
          {user ? (
            <>
              <div className="flex items-center space-x-3">
                {user.photoURL ? (
                  <Link to="/">
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-9 h-9 rounded-full border-2 border-indigo-400 hover:scale-105 transition-transform duration-200 shadow-lg shadow-indigo-500/30"
                    />
                  </Link>
                ) : (
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-indigo-500/30">
                    {user.displayName?.charAt(0) || "U"}
                  </div>
                )}
                <span className="font-semibold text-sm hidden sm:inline text-gray-300">
                  {user.displayName || "Player"}
                </span>
              </div>

              <button
                 onClick={handlelogout}
                className="btn btn-sm md:btn-md bg-gradient-to-r from-red-500 to-pink-600 text-white border-none hover:opacity-90 shadow-lg shadow-red-500/30"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-sm md:btn-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none hover:opacity-90 shadow-lg shadow-indigo-500/30"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm md:btn-md bg-gradient-to-r from-pink-500 to-red-500 text-white border-none hover:opacity-90 shadow-lg shadow-pink-500/30"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
