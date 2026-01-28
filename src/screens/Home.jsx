import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Countdown timer
  const calculateTimeLeft = () => {
    const eventDate = new Date('December 15, 2024 09:00:00').getTime();
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
      title: "Welcome to FMUN 2024",
      subtitle: "Where Diplomacy Meets Leadership",
      bg: "from-blue-600 to-purple-700"
    },
    {
      title: "Shape the Future",
      subtitle: "Debate Critical Global Issues",
      bg: "from-purple-600 to-pink-700"
    },
    {
      title: "Join the Discourse",
      subtitle: "Experience Model United Nations",
      bg: "from-indigo-600 to-blue-700"
    }
  ];

  const committees = [
    { name: "UNSC", color: "bg-red-500", desc: "Security Council" },
    { name: "DISEC", color: "bg-blue-500", desc: "Disarmament" },
    { name: "UNHRC", color: "bg-green-500", desc: "Human Rights" },
    { name: "WHO", color: "bg-teal-500", desc: "Health Organization" },
    { name: "SOCHUM", color: "bg-purple-500", desc: "Social Affairs" },
    { name: "PNA", color: "bg-amber-500", desc: "Press & Media" }
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

          {/* Countdown Timer */}
          <div className="mb-12 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Conference Starts In</h3>
            <div className="flex justify-center space-x-4 md:space-x-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600">{value}</div>
                    <div className="text-sm md:text-base font-medium text-gray-600 uppercase mt-2">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Register Now
            </Link>
            <Link
              to="/committee"
              className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200"
            >
              View Committees
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-gray-600">Scroll Down</div>
          <svg className="w-6 h-6 mx-auto mt-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Event Details
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Venue & Dates */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.02] animate-slide-up">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Venue & Dates</h3>
              </div>
              
              <div className="space-y-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm font-medium text-blue-600 mb-1">Date</div>
                  <div className="text-2xl font-bold text-gray-900">December 15-17, 2024</div>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-sm font-medium text-purple-600 mb-1">Time</div>
                  <div className="text-2xl font-bold text-gray-900">9:00 AM - 6:00 PM Daily</div>
                </div>
                
                <div className="text-center p-4 bg-indigo-50 rounded-xl">
                  <div className="text-sm font-medium text-indigo-600 mb-1">Venue</div>
                  <div className="text-xl font-bold text-gray-900">FMUN Convention Center</div>
                  <div className="text-gray-600 mt-2">123 Diplomacy Street, Islamabad</div>
                </div>
              </div>
            </div>

            {/* Fee Structure */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.02] animate-slide-up" style={{animationDelay: '100ms'}}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fee Structure</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                  <div className="text-sm font-medium mb-1">Delegate Fee</div>
                  <div className="text-3xl font-bold">PKR 2,500</div>
                  <div className="text-sm opacity-90 mt-2">Full Conference Access</div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl text-white">
                  <div className="text-sm font-medium mb-1">Observer Fee</div>
                  <div className="text-3xl font-bold">PKR 1,500</div>
                  <div className="text-sm opacity-90 mt-2">Observation Only</div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl text-white">
                  <div className="text-sm font-medium mb-1">Qawali Night</div>
                  <div className="text-3xl font-bold">PKR 500</div>
                  <div className="text-sm opacity-90 mt-2">Additional Ticket</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">Early bird discounts available until November 30</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.02] animate-slide-up" style={{animationDelay: '200ms'}}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contact & Help</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-amber-50 rounded-xl">
                  <div className="text-sm font-medium text-amber-600 mb-1">Email Support</div>
                  <div className="text-lg font-bold text-gray-900">support@fmun.com</div>
                  <div className="text-sm text-gray-600 mt-2">For registration queries</div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm font-medium text-blue-600 mb-1">Phone Support</div>
                  <div className="text-lg font-bold text-gray-900">+92 300 1234567</div>
                  <div className="text-sm text-gray-600 mt-2">Available 9AM-5PM</div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-xl">
                  <div className="text-sm font-medium text-green-600 mb-1">Emergency Contact</div>
                  <div className="text-lg font-bold text-gray-900">+92 300 7654321</div>
                  <div className="text-sm text-gray-600 mt-2">Event day emergencies</div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/faq" className="text-blue-600 hover:text-blue-800 text-sm font-medium">FAQ</Link>
                  <Link to="/schedule" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Schedule</Link>
                  <Link to="/status" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Check Status</Link>
                  <Link to="/admin" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Admin</Link>
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
              to="/committees"
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
            Join hundreds of delegates in shaping global discourse at FMUN 2024
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-bounce-slow"
          >
            Register Now
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