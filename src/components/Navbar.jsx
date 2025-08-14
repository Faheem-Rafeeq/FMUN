import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";
import fmunblack from "../assets/fmunblack.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-300 w-full h-[90px] flex items-center justify-between px-4 md:px-10 relative">
      {/* Logo */}
      <Link to="/" onClick={() => setIsMenuOpen(false)}>
        <img
          className="w-[80px] md:w-[87px] h-[70px] md:h-[70px] mt-[7px] cursor-pointer"
          src={fmunblack}
          alt="FMUN Logo"
        />
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:block">
        <ul className="flex flex-row space-x-4 lg:space-x-6">
          <li>
            <Link to="/" className="text-black cursor-pointer  font-extralight  text-lg lg:text-xl hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black cursor-pointer font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              About us
            </Link>
          </li>
          <li>
            <Link to="/committee" className="text-black  cursor-pointer  font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              Committee
            </Link>
          </li>
          <li>
            <Link to="/schedule" className="text-black  cursor-pointer  font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/announcements" className="text-black  cursor-pointer  font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              Announcements
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-black cursor-pointer  font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              Register
            </Link>

          </li>
        </ul>
      </div>

      {/* Button - Desktop */}
      <div className="hidden md:block flex items-center space-x-4">
        <Link to="/login" className="gap-1 flex bg-white text-black  font-extralight px-4 lg:px-5 py-2 cursor-pointer hover:bg-gray-200 transition items-center">
          Login <span className='text-xl mt-1'><GoArrowUpRight /></span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-blue-300 z-50 py-4 px-4 ">
          <ul className="flex flex-col space-y-4">
            <li>
            <Link to="/" className="text-black cursor-pointer  font-extralight  text-lg lg:text-xl hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black cursor-pointer font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              About us
            </Link>
          </li>
          <li>
            <Link to="/committee" className="text-black  cursor-pointer  font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              Committee
            </Link>
          </li>
          <li>
            <Link to="/schedule" className="text-black  cursor-pointer  font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/announcements" className="text-black  cursor-pointer  font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              Announcements
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-black cursor-pointer  font-extralight text-lg lg:text-xl hover:text-gray-300 transition">
              Register
            </Link>

          </li>
            <li className="flex items-center space-x-4">
                <Link to="/login" className="gap-1 flex bg-white text-black font-extralight px-4 lg:px-5 py-2 cursor-pointer hover:bg-gray-200 transition items-center">
                  Login <span className='text-xl mt-1'><GoArrowUpRight /></span>
                </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
