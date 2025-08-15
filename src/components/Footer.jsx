import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import fmunblack from "../assets/fmunblack.png"
import CollegeMap from "../components/Map"


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={fmunblack}
                alt="FMUN Logo"
                className="h-15 w-auto"
              />
              <div className="ml-3">
                <h2 className="text-2xl font-bold">FAZAIA</h2>
                <p className="text-sm">MODEL UNITED NATION</p>
              </div>
            </div>

            <div className="space-y-2 mt-[30px]">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +92 3076646639
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                fmun23@gmail.com
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Fazaia Degree College Faisal Karachi
              </p>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">QUICK LINKS</h3>
            <ul className="space-y-2 font-bold">
              <li className="flex items-center">
                <p className='pt-1 px-2'><GoArrowUpRight /></p>
                <Link to="/" className="hover:text-gray-300 transition">HOME</Link>
              </li>
              <li className="flex items-center">
                <p className='pt-1 px-2'><GoArrowUpRight /></p>
                <Link to="/about" className="hover:text-gray-300 transition">ABOUT US</Link>
              </li>
              <li className="flex items-center">
                <p className='pt-1 px-2'><GoArrowUpRight /></p>
                <Link to="/comittee" className="hover:text-gray-300 transition">COMMITTEE</Link>
              </li>
              <li className="flex items-center">
                <p className='pt-1 px-2'><GoArrowUpRight /></p>
                <Link to="/shedule" className="hover:text-gray-300 transition">SCHEDULE</Link>
              </li>
              <li className="flex items-center">
                <p className='pt-1 px-2'><GoArrowUpRight /></p>
                <Link to="/announcements" className="hover:text-gray-300 transition">ANNOUNCEMENTS</Link>
              </li>
              <li className="flex items-center">
                <p className='pt-1 px-2'><GoArrowUpRight /></p>
                <Link to="/register" className="hover:text-gray-300 transition">REGISTER</Link>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="">
            <h1 className="text-xl font-bold mb-4">OUR LOCATION</h1>
            <CollegeMap />
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-5 pt-6 border-t border-gray-700 text-center font-bold">
          <p>COPYRIGHT 2025 © ALL RIGHT RESERVED FAZAIA MODEL UNITED NATION</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;