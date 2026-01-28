import React from "react";

const Committees = () => {
  const committees = [
    {
      acronym: "UNSC",
      fullForm: "United Nations Security Council",
      agenda: "Addressing the escalating tensions in the South China Sea: Balancing national sovereignty with freedom of navigation and regional stability",
      description: "The primary body responsible for maintaining international peace and security. Has the power to make decisions that member states are obligated to implement.",
      color: "from-red-600 to-red-800",
      icon: "🛡️",
      members: "15 Members (5 Permanent)",
      focus: "International Peace & Security"
    },
    {
      acronym: "DISEC",
      fullForm: "Disarmament and International Security Committee",
      agenda: "Regulating the proliferation of autonomous weapons systems and drones in modern warfare",
      description: "Deals with disarmament, global challenges, and threats to peace that affect the international community.",
      color: "from-blue-600 to-blue-800",
      icon: "⚔️",
      members: "All UN Member States",
      focus: "Disarmament & Military Affairs"
    },
    {
      acronym: "UNHRC",
      fullForm: "United Nations Human Rights Council",
      agenda: "Addressing the protection of digital privacy rights in the age of mass surveillance and AI",
      description: "Responsible for strengthening the promotion and protection of human rights around the globe.",
      color: "from-green-600 to-green-800",
      icon: "👥",
      members: "47 Member States",
      focus: "Human Rights Protection"
    },
    {
      acronym: "WHO",
      fullForm: "World Health Organization",
      agenda: "Developing global strategies for pandemic preparedness and response in the post-COVID era",
      description: "Directs and coordinates international health within the United Nations system.",
      color: "from-teal-600 to-teal-800",
      icon: "🏥",
      members: "194 Member States",
      focus: "Global Health & Pandemic Response"
    },
    {
      acronym: "SOCHUM",
      fullForm: "Social, Humanitarian and Cultural Committee",
      agenda: "Addressing the global refugee crisis: Developing comprehensive frameworks for protection and integration",
      description: "Deals with human rights, humanitarian affairs, and social issues affecting people worldwide.",
      color: "from-purple-600 to-purple-800",
      icon: "🤝",
      members: "All UN Member States",
      focus: "Social & Humanitarian Affairs"
    },
    {
      acronym: "PNA",
      fullForm: "Press & News Agency",
      agenda: "Covering the FMUN conference: Reporting on debates, resolutions, and diplomatic negotiations",
      description: "The journalistic arm responsible for documenting proceedings, interviewing delegates, and publishing daily bulletins.",
      color: "from-amber-600 to-amber-800",
      icon: "📰",
      members: "Selected Journalists",
      focus: "Media Coverage & Reporting"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            FMUN Committees
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the diverse committees of FMUN 2024, each tackling critical global issues through diplomacy and debate.
          </p>
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
                {/* Agenda */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                    <h3 className="text-lg font-semibold text-gray-800">Agenda</h3>
                  </div>
                  <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm md:text-base">
                    "{committee.agenda}"
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">📋</span> Committee Description
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {committee.description}
                  </p>
                </div>

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
                    <div className="text-xs text-gray-500">Members</div>
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
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              About FMUN Committees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Simulated Environment</h3>
                <p className="text-gray-600">Experience real UN committee proceedings in an authentic simulation.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Diplomatic Dialogue</h3>
                <p className="text-gray-600">Engage in constructive debates and diplomatic negotiations.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Issues</h3>
                <p className="text-gray-600">Address pressing international concerns through multilateral cooperation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Tips */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 md:p-8 text-white animate-slide-up">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
            💡 Committee Selection Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-lg mr-3">1</div>
              <p>Choose a committee aligned with your interests and expertise</p>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-lg mr-3">2</div>
              <p>Consider the agenda topic's relevance to current global affairs</p>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-lg mr-3">3</div>
              <p>Research your assigned country's position on the agenda</p>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-lg mr-3">4</div>
              <p>Prepare position papers and speaking points in advance</p>
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