import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Countdown timer - Updated to February 14, 2026
  const calculateTimeLeft = () => {
    const eventDate = new Date('February 14, 2026 09:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;
    
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Auto slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Welcome to FMUN 2026",
      subtitle: "Where Diplomacy Meets Leadership",
      bg: "from-blue-600 to-purple-700"
    },
    {
      title: "Registration Starting Soon",
      subtitle: "Get Ready to Reserve Your Spot",
      bg: "from-purple-600 to-pink-700"
    },
    {
      title: "Join the Diplomatic Discourse",
      subtitle: "Experience Model United Nations",
      bg: "from-indigo-600 to-blue-700"
    }
  ];

  const committees = [
    { name: "UNSC", color: "bg-red-500", desc: "Security Council" },
    { name: "UNGA", color: "bg-blue-500", desc: "UN General Assembly" },
    { name: "UNHRC", color: "bg-green-500", desc: "Human Rights" },
    { name: "WHO", color: "bg-teal-500", desc: "Health Organization" },
    { name: "SOCHUM", color: "bg-purple-500", desc: "Social Affairs" },
    { name: "PNA", color: "bg-amber-500", desc: "Pakistan National Assembly" }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Animated Slides */}
          <div className="relative h-64 md:h-80 mb-8 overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 transform ${
                  currentSlide === index
                    ? 'opacity-100 translate-x-0'
                    : index > currentSlide
                    ? 'opacity-0 translate-x-full'
                    : 'opacity-0 -translate-x-full'
                }`}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 animate-slide-up">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-12">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Registration Announcement */}
          <div className="mb-8 animate-fade-in">
            <Link
              to="/register" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
              <span className="animate-pulse mr-2">🔔</span>
Register Now          </Link>
            <div className="relative overflow-hidden max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-dashed border-blue-300">
                <p className="text-gray-700 font-medium">
                  Join us for an incredible event!
                </p>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Conference Starts In</h3>
            <div className="flex justify-center space-x-4 md:space-x-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-gray-200">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600">
                      {value < 10 ? `0${value}` : value}
                    </div>
                    <div className="text-sm md:text-base font-medium text-gray-600 uppercase mt-2">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
       
        </div>

      
      </div>

      {/* Event Details Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Event Details
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Venue & Dates */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.02] animate-slide-up">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Event Schedule & Venue</h3>
              </div>
              
              <div className="space-y-6">
                {/* Dates */}
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm font-medium text-blue-600 mb-1">Dates</div>
                  <div className="text-2xl font-bold text-gray-900">February 14-15, 2026</div>
                  <div className="text-gray-600 mt-2">Two Days of Diplomatic Excellence</div>
                </div>
                
                {/* Venue */}
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-sm font-medium text-purple-600 mb-1">Venue</div>
                  <div className="text-xl font-bold text-gray-900">Fazaia Degree College, Faisal</div>
                  <div className="text-gray-600 mt-2">Air base Faisal</div>
                </div>
                
                {/* Detailed Schedule */}
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="text-sm font-medium text-indigo-600 mb-3">Detailed Schedule</div>
                  
                  {/* Day 1 */}
                  <div className="mb-4 text-left">
                    <div className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded mr-2">Day 1</span>
                      February 14, 2026
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 ml-6">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium">9:00 AM</span>
                        <span className="ml-3">Opening Ceremony & Orientation</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium">10:30 AM</span>
                        <span className="ml-3">Committee Session 1</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-medium">1:00 PM</span>
                        <span className="ml-3">Lunch Break</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium">2:30 PM</span>
                        <span className="ml-3">Committee Session 2</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-medium">4:30 PM</span>
                        <span className="ml-3">Tea Break</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="font-medium">8:00 PM</span>
                        <span className="ml-3">Qawali Night</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Day 2 */}
                  <div className="text-left">
                    <div className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded mr-2">Day 2</span>
                      February 15, 2026
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 ml-6">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium">9:00 AM</span>
                        <span className="ml-3">Committee Session 3</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-medium">11:00 AM</span>
                        <span className="ml-3">Break</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium">11:30 AM</span>
                        <span className="ml-3">Committee Session 4</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        <span className="font-medium">2:00 PM</span>
                        <span className="ml-3">Prize Distribution Ceremony</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <span className="font-medium">7:00 PM</span>
                        <span className="ml-3">Gala Dinner</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        <span className="font-medium">9:00 PM</span>
                        <span className="ml-3">Fireworks Display</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Time Note */}
                <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-sm text-amber-700">
                    <span className="font-medium">Note:</span> All times are approximate and subject to change
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Structure - Updated */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.02] animate-slide-up" style={{animationDelay: '100ms'}}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fee Structure</h3>
                <p className="text-gray-600 mt-2">All inclusive package</p>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl text-white">
                  <div className="text-sm font-medium mb-1">Observer Fee</div>
                  <div className="text-3xl font-bold">PKR 2,500</div>
                  <div className="text-sm opacity-90 mt-2">Observation Access Only</div>
                  <div className="text-xs opacity-80 mt-1">Conference Materials Included</div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                  <div className="text-sm font-medium mb-1">Delegate Fee</div>
                  <div className="text-3xl font-bold">PKR 2,000</div>
                  <div className="text-sm opacity-90 mt-2">Full Participation Access</div>
                  <div className="text-xs opacity-80 mt-1">Debate & Committee Sessions</div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl text-white">
                  <div className="text-sm font-medium mb-1">Qawali Night</div>
                  <div className="text-3xl font-bold">PKR 1,500</div>
                  <div className="text-sm opacity-90 mt-2">Additional Cultural Event</div>
                  <div className="text-xs opacity-80 mt-1">Separate Ticket Required</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Package Inclusions</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Conference Kit</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Lunch & Tea</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Certificate</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Conference Materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Committees Preview */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Our Committees
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {committees.map((committee, index) => (
              <div
                key={committee.name}
                className={`${committee.color} rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-slide-up`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{committee.name}</div>
                  <div className="text-sm opacity-90">{committee.desc}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/committee"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore All Committees
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Begin Your Diplomatic Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Join hundreds of delegates in shaping global discourse at FMUN 2026
          </p>
          <Link
            to="/committee"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-bounce-slow"
          >
            View Committees
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;