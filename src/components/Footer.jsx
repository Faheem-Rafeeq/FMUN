import React from 'react';
import { GoArrowUpRight } from "react-icons/go";


const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column - Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img
                                src="https://thecreativedudes.com/wp-content/uploads/2024/11/CD-logo-scaled-e1745344347565.png"
                                alt="Creative Dudes Logo"
                                className="h-12 w-auto"
                            />
                            <div className="ml-3 hidden sm:block">
                                <h2 className="text-2xl font-bold">CREATIVES</h2>
                                <p className="text-sm">THINK CREATIVE</p>
                            </div>

                        </div>

                        <div className="space-y-2 mt-[70px]">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                +91 7237056002
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                info@thecreativedudes.com
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Gomti Nagar Lucknow India
                            </p>
                        </div>
                    </div>

                    {/* Middle Column - Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">QUICK LINKS</h3>
                        <ul className="space-y-2 font-bold">
                            <li className="flex items-center">
                                <p className='pt-1 px-2'><GoArrowUpRight /></p>
                                HOME
                            </li>
                            <li className="flex items-center">
                                <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                WHO ARE WE
                            </li>
                            <li className="flex items-center">
                                <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                SERVICES
                            </li>
                            <li className="flex items-center">
                                <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                WHY CHOOSE US
                            </li>
                            <li className="flex items-center">
                                <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                CONTACT
                            </li>
                        </ul>
                    </div>

                    {/* Right Column - Services */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">OUR SERVICES</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="flex items-center font-bold">
                                    <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                    SEARCH ENGINE OPTIMIZATION
                                </p>
                                <p className="flex items-center font-bold">
                                    <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                    WEBSITE DEVELOPMENT
                                </p>
                                <p className="flex items-center font-bold">
                                    <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                    ECOMMERCE STRATEGY
                                </p>
                                <p className="flex items-center font-bold">
                                    <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                    SOCIAL MEDIA ADVERTISING
                                </p>
                                <p className="flex items-center font-bold">
                                    <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                    GOOGLE ADVERTISING
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="flex items-center font-bold">
                                    <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                    EMAIL MARKETING
                                </p>
                                <p className="flex items-center font-bold">
                                    <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                    SMS MARKETING
                                </p>
                                <p className="flex items-center font-bold">
                                    <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                    FACEBOOK ADS
                                </p>
                                <p className="flex items-center font-bold">
                                    <p className='pt-1 px-2'><GoArrowUpRight /></p>

                                    BRANDING PHOTOGRAPHY
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-12 pt-6 border-t border-gray-700 text-center font-extrabold">
                    <p>COPYRIGHT 2025 © ALL RIGHT RESERVED THE CREATIVE DUDES</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;