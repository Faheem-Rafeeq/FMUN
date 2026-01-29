import React from "react";

const Committees = () => {
  const committees = [
    {
      acronym: "UNGA",
      fullForm: "United Nations General Assembly",
      description: "The main deliberative, policymaking and representative organ of the United Nations, comprising all 193 Member States. As the UN's principal forum for multilateral discussion, it addresses international issues covered by the UN Charter.",
      color: "from-blue-600 to-blue-800",
      icon: "🌍",
      members: "20 Delegates",
      focus: "General Debate & Global Issues"
    },
    {
      acronym: "UNHRC",
      fullForm: "United Nations Human Rights Council",
      description: "An inter-governmental body within the United Nations system responsible for strengthening the promotion and protection of human rights around the globe. It addresses situations of human rights violations and makes recommendations on them.",
      color: "from-green-600 to-green-800",
      icon: "👥",
      members: "18 Delegates",
      focus: "Human Rights Protection & Monitoring"
    },
    {
      acronym: "UNSC",
      fullForm: "United Nations Security Council",
      description: "The primary body responsible for maintaining international peace and security. Has the power to make decisions that member states are obligated to implement under the UN Charter. Comprises 5 permanent members with veto power and 10 non-permanent members.",
      color: "from-red-600 to-red-800",
      icon: "🛡️",
      members: "15 Delegates",
      focus: "International Peace & Security",
      specialNote: "5 Permanent Members (USA, UK, France, Russia, China) + 10 Non-Permanent Members"
    },
    {
      acronym: "WHO",
      fullForm: "World Health Organization",
      description: "The directing and coordinating authority on international health within the United Nations system. Responsible for providing leadership on global health matters, shaping the health research agenda, setting norms and standards, and monitoring health trends.",
      color: "from-teal-600 to-teal-800",
      icon: "🏥",
      members: "17 Delegates",
      focus: "Global Health & Pandemic Response"
    },
    {
      acronym: "PNA",
      fullForm: "Pakistan National Assembly",
      description: "The lower house of the Parliament of Pakistan, responsible for legislation, oversight of the executive, and representation of the people. Simulates the actual political dynamics of Pakistan's parliamentary system with representation from major political parties.",
      color: "from-amber-600 to-amber-800",
      icon: "🏛️",
      members: "35 Delegates",
      focus: "National Legislation & Governance",
      specialNote: "Party Representation: 10 PTI, 10 PML-N, 10 PPP, 5 Independents"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            FMUN Committees 2026
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse committee structure with realistic representation and diplomatic challenges.
          </p>
          <div className="mt-6 inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium">
            <span className="mr-2">📊</span>
            Total Capacity: 105 Delegates
          </div>
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {committees.map((committee, index) => (
            <div 
              key={committee.acronym}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${committee.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{committee.icon}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {committee.acronym}
                      </h2>
                    </div>
                    <p className="text-white/90 text-sm md:text-base mt-2">
                      {committee.fullForm}
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-white/80 text-xs font-medium px-3 py-1 bg-white/20 rounded-full">
                      {committee.members}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">📋</span> Committee Description
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {committee.description}
                  </p>
                </div>

                {/* Special Note */}
                {committee.specialNote && (
                  <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-yellow-600 mr-2">📌</span>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">Special Structure</h4>
                        <p className="text-yellow-700 text-sm">{committee.specialNote}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Focus Area */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">🎯</span> Primary Focus
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">{committee.focus}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                      {committee.members.split(" ")[0]}
                    </div>
                    <div className="text-xs text-gray-500">Delegates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                      {committee.acronym.length}
                    </div>
                    <div className="text-xs text-gray-500">Letters</div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}

          {/* Total Overview Card */}
          <div className="group relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl overflow-hidden border border-purple-500 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-slide-up md:col-span-2 lg:col-span-3">
            <div className="p-6 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">FMUN 2026 Overview</h2>
                  <p className="text-purple-100">Complete Committee Structure & Distribution</p>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-4xl md:text-5xl font-bold mb-1">105</div>
                  <div className="text-purple-200">Total Delegates</div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
                {committees.map((committee) => (
                  <div key={committee.acronym} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl mb-2">{committee.icon}</div>
                    <div className="font-bold">{committee.acronym}</div>
                    <div className="text-sm text-white/80 mt-1">{committee.members}</div>
                  </div>
                ))}
              </div>
              
              {/* UNSC Special Structure */}
              <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
                <h3 className="font-bold text-lg mb-2">🏛️ UNSC Special Composition</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="text-center">
                    <div className="font-bold text-white">Permanent</div>
                    <div className="text-sm text-white/80">5 Members</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white">Non-Permanent</div>
                    <div className="text-sm text-white/80">10 Members</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white">🇺🇸 USA</div>
                    <div className="text-sm text-white/80">Permanent</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white">🇬🇧 UK</div>
                    <div className="text-sm text-white/80">Permanent</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white">🇫🇷 France</div>
                    <div className="text-sm text-white/80">Permanent</div>
                  </div>
                </div>
              </div>
              
              {/* PNA Party Distribution */}
              <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
                <h3 className="font-bold text-lg mb-2">🇵🇰 PNA Party Distribution</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="font-bold text-white">PTI</div>
                    <div className="text-sm text-white/80">10 Delegates</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white">PML-N</div>
                    <div className="text-sm text-white/80">10 Delegates</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white">PPP</div>
                    <div className="text-sm text-white/80">10 Delegates</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-white">Independents</div>
                    <div className="text-sm text-white/80">5 Delegates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Committee Selection Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Based on Capacity</h3>
                <p className="text-gray-600">Committees have specific delegate capacities ranging from 15-35 members.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Realistic Representation</h3>
                <p className="text-gray-600">UNSC follows actual UN structure with permanent and non-permanent members.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🇵🇰</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">National Simulation</h3>
                <p className="text-gray-600">PNA replicates Pakistan's actual parliamentary party distribution.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Tips */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 md:p-8 text-white animate-slide-up">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
            💡 Committee Selection Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-lg mr-3">1</div>
              <p>Choose based on your interest in global vs national politics</p>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-lg mr-3">2</div>
              <p>Consider committee size - smaller committees offer more speaking time</p>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-lg mr-3">3</div>
              <p>UNSC is ideal for those interested in security and veto power dynamics</p>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-lg mr-3">4</div>
              <p>PNA offers experience in domestic parliamentary politics</p>
            </div>
          </div>
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
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Committees;