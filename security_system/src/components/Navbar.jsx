import React, { useState } from "react";
import { navLinks } from "../constants";
import Navlinks from "./Links/Navlinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed w-full top-0 flex justify-center bg-transparent z-30">
      <div className="w-full max-w-[1200px] text-white my-5 px-5 sm:px-10 rounded-full box flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center font-sonsie">
          <div className="text-[50px] text-[#4D94FF]">I</div>
          <div className="ml-2">
            nfosec
            <br />
            Solutions
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 flex justify-center">
          <ul className="list-none sm:flex hidden justify-center items-center gap-10">
            {navLinks.map((navlink) => (
              <Navlinks key={navlink.id} {...navlink} />
            ))}
          </ul>
        </div>

        {/* Login and Sign Up */}
        <div className="border border-glass px-6 py-2 rounded-full sm:flex hidden">
          <div className="flex items-center justify-center gap-2">
            <a href="#" className="text-[16px]">
              Login
            </a>
            <div className="w-[1px] h-[20px] bg-white"></div>
            <a href="#" className="text-[16px]">
              Sign Up
            </a>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setToggle(!toggle)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {toggle ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="sm:hidden absolute top-20 mt-10 left-0 w-full p-5 rounded-lg bg-opacity-25 backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 shadow-lg">
          <ul className="list-none flex flex-col gap-5 text-white">
            {navLinks.map((navlink) => (
              <Navlinks key={navlink.id} {...navlink} />
            ))}
            <div className="flex flex-col items-center gap-2 mt-5">
              <a
                href="#"
                className="w-full rounded-xl bg-[#2B09FF] bg-opacity-50 hover:bg-[#2B09FF] py-2 text-center px-3 text-[16px]"
              >
                Login
              </a>
              <a
                href="#"
                className="w-full rounded-xl bg-[#2B09FF] bg-opacity-50 hover:bg-[#2B09FF] py-2 text-center px-3 text-[16px]"
              >
                Sign Up
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
