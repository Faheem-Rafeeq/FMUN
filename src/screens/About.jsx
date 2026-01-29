import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("what-is-mun");

  const testimonials = [
    {
      name: "Faizan Afzal",
      role: "Best Delegate, UNSC 2024",
      review: "FMUN transformed my perspective on international diplomacy. The level of debate was exceptional!",
      rating: 5,
      image: "👩‍🎓"
    },
    {
      name: "Zeeshan Arafan",
      role: "Delegate, 2024",
      review: "The most professionally organized MUN I've attended. The executive board was outstanding!",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Ali Asghar Abbas",
      role: "Delegate, PNA 2024",
      review: "Covering FMUN was an incredible experience. The press team atmosphere was electrifying!",
      rating: 4,
      image: "👩‍💻"
    }
  ];

  const faqs = [
    {
      question: "What is Model United Nations?",
      answer: "Model UN is an educational simulation where students learn about diplomacy, international relations, and the United Nations."
    },
    {
      question: "Who can participate in FMUN?",
      answer: "FMUN is open to all FDC Faisal students. No prior MUN experience is required."
    },
    {
      question: "What committees are available?",
      answer: "We offer UNSC, UNHRC, WHO, UNGO, and PNA committees covering various global issues."
    },
    {
      question: "How can I register?",
      answer: "Register through our website portal. Early bird discounts are available for timely registration."
    }
  ];

  const stats = [
    { number: "500+", label: "Past Delegates" },
    { number: "6", label: "Committees" },
    { number: "2", label: "Conference Days" },
    { number: "50+", label: "Executive Board" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About FMUN
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Where Future Diplomats Are Forged Through Debate & Diplomacy
            </p>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Stats Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information Tabs */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-5xl mx-auto">
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: "what-is-un", label: "What is UN?" },
              { id: "what-is-mun", label: "What is MUN?" },
              { id: "about-fmun", label: "About FMUN" },
              { id: "mission", label: "Our Mission" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 animate-fade-in">
            {activeTab === "what-is-un" && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">United Nations</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The United Nations is an international organization founded in 1945 after the Second World War. 
                      It is currently made up of 193 Member States. The mission and work of the United Nations are 
                      guided by the purposes and principles contained in its founding Charter.
                    </p>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <h4 className="font-bold text-blue-700 mb-2">Main Goals</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Maintain international peace and security</li>
                          <li>• Develop friendly relations among nations</li>
                          <li>• Achieve international cooperation</li>
                          <li>• Be a center for harmonizing actions</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-xl">
                        <h4 className="font-bold text-purple-700 mb-2">Key Organs</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• General Assembly</li>
                          <li>• Security Council</li>
                          <li>• Economic and Social Council</li>
                          <li>• International Court of Justice</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "what-is-mun" && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Model United Nations</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Model United Nations is an educational simulation and academic competition where students 
                      learn about diplomacy, international relations, and the United Nations. Participants role-play 
                      as diplomats representing a country or NGO in a simulated session of a UN committee.
                    </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl">
                        <div className="text-2xl mb-2">💬</div>
                        <div className="font-bold">Public Speaking</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl">
                        <div className="text-2xl mb-2">🤝</div>
                        <div className="font-bold">Diplomacy</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl">
                        <div className="text-2xl mb-2">📝</div>
                        <div className="font-bold">Research</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "about-fmun" && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">About FMUN</h3>
                    <p className="text-gray-600 leading-relaxed">
                      FMUN (Future Model United Nations) is one of premier MUN conferences, 
                      organized annually to provide students with a platform to engage in meaningful 
                      diplomatic discourse. Since our inception, we have hosted thousands of delegates 
                      from across the country.
                    </p>
                    <div className="mt-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-3">Our Journey</h4>
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                        <div className="ml-6 space-y-6">
                          <div className="relative">
                            <div className="absolute -left-9 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                            <div>
                              <div className="font-bold text-gray-800">2023</div>
                              <div className="text-gray-600"> FMUN conference with 200+ delegates</div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-9 top-2 w-4 h-4 bg-purple-500 rounded-full"></div>
                            <div>
                              <div className="font-bold text-gray-800">2024</div>
                              <div className="text-gray-600">Expanded to 6 committees with international participation</div>
                            </div>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-9 top-2 w-4 h-4 bg-green-500 rounded-full"></div>
                            <div>
                              <div className="font-bold text-gray-800">2026</div>
                              <div className="text-gray-600">Largest edition with 500+ delegates expected</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "mission" && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission & Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To create a platform where young minds can develop diplomatic skills, 
                      engage in constructive debate, and foster international understanding 
                      through simulated United Nations proceedings.
                    </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-blue-800 mb-3">Our Mission</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">✓</span>
                            Develop future leaders through diplomatic simulation
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">✓</span>
                            Promote cross-cultural understanding
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">✓</span>
                            Enhance public speaking and negotiation skills
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-purple-800 mb-3">Our Vision</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">★</span>
                            Become Pakistan's leading MUN conference
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">★</span>
                            Foster global citizenship among youth
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">★</span>
                            Create a network of future diplomats
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Principal's Message */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-5xl"></span>
                </div>
              </div>
              <div className="flex-1 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-white/50 mr-4"></div>
                  <h3 className="text-2xl font-bold">Message from the Principal</h3>
                </div>
                <blockquote className="text-lg italic mb-6">
                  "FMUN represents the pinnacle of academic excellence and diplomatic education. 
                  Through this platform, we aim to nurture the leaders of tomorrow by providing 
                  them with the skills, knowledge, and confidence to engage with global challenges. 
                  Each debate, each resolution, and each handshake at FMUN shapes character and 
                  builds bridges between cultures."
                </blockquote>
                <div>
                  <div className="font-bold text-xl">Uzma Ali</div>
                  <div className="text-white/80">Principal, Fazaia Degree College Faisal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            What Our Delegates Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform transition-all duration-300 hover:scale-[1.02] animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-3xl">
                    {testimonial.image}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">Q</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-in">
            Ready to Join FMUN 2026?
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up">
            Become part of Pakistan's premier diplomatic simulation
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-slow"
          >
            Register Now
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
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
      `}</style>
    </div>
  );
};

export default AboutUs;