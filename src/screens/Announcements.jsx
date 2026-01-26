import React, { useState, useEffect } from "react";
import { db } from "../Firebase/Firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import html2canvas from "html2canvas";

const Announcements = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);

  const fetchUserData = async () => {
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const q = query(collection(db, "registrations"), where("email", "==", email.toLowerCase().trim()));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        setUserData({ id: userDoc.id, ...userDoc.data() });
      } else {
        setError("No registration found with this email address");
        setUserData(null);
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Error fetching your data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

 const downloadIDCard = async () => {
  if (!userData) return;
  
  setDownloading(true);

  try {
    // Create a simple HTML structure for the ID card without Tailwind classes
    const tempDiv = document.createElement('div');
    tempDiv.style.width = '400px';
    tempDiv.style.height = '250px';
    tempDiv.style.backgroundColor = '#1f2937'; // gray-900
    tempDiv.style.color = 'white';
    tempDiv.style.padding = '20px';
    tempDiv.style.borderRadius = '16px';
    tempDiv.style.border = '2px solid #374151'; // gray-700
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    
    tempDiv.innerHTML = `
      <div style="text-align: center; margin-bottom: 20px; border-bottom: 1px solid #4b5563; padding-bottom: 10px;">
        <h3 style="font-size: 24px; font-weight: bold; margin: 0 0 5px 0;">FMUN 2024</h3>
        <p style="color: #d1d5db; margin: 0; font-weight: 500;">Model United Nations</p>
        <p style="color: #9ca3af; font-size: 12px; margin: 5px 0 0 0;">Official Delegate Identification</p>
      </div>
      <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 20px;">
        <div style="width: 80px; height: 80px; background-color: #374151; border-radius: 50%; border: 3px solid #4b5563; display: flex; align-items: center; justify-content: center;">
          <span style="color: #9ca3af; font-size: 24px;">👤</span>
        </div>
        <div style="flex: 1;">
          <h4 style="font-size: 20px; font-weight: bold; margin: 0 0 5px 0;">${userData.fullName}</h4>
          <p style="color: #d1d5db; margin: 0 0 10px 0; font-weight: 500;">${userData.institution}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 12px;">
            <div>
              <p style="color: #9ca3af; margin: 0; font-weight: 500;">Committee</p>
              <p style="font-weight: bold; margin: 2px 0;">${userData.committee}</p>
            </div>
            <div>
              <p style="color: #9ca3af; margin: 0; font-weight: 500;">Country</p>
              <p style="font-weight: bold; margin: 2px 0;">${userData.country}</p>
            </div>
            <div>
              <p style="color: #9ca3af; margin: 0; font-weight: 500;">Status</p>
              <p style="font-weight: bold; margin: 2px 0; text-transform: capitalize;">${userData.status || "pending"}</p>
            </div>
            <div>
              <p style="color: #9ca3af; margin: 0; font-weight: 500;">Delegate ID</p>
              <p style="font-weight: bold; margin: 2px 0; font-size: 10px;">${userData.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div style="text-align: center; border-top: 1px solid #4b5563; padding-top: 10px;">
        <p style="color: #9ca3af; font-size: 10px; margin: 0 0 5px 0;">This ID must be presented at the registration desk</p>
        <div style="display: flex; justify-content: space-between; font-size: 10px; color: #6b7280;">
          <span>FMUN 2024</span>
          <span>Official Event</span>
        </div>
      </div>
    `;

    document.body.appendChild(tempDiv);

    const canvas = await html2canvas(tempDiv, {
      scale: 3,
      backgroundColor: '#1f2937',
      useCORS: true,
      logging: false
    });
    
    document.body.removeChild(tempDiv);

    const link = document.createElement("a");
    link.download = `FMUN-ID-Card-${userData.fullName}.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  } catch (err) {
    console.error("Error generating ID card:", err);
    alert("Error downloading ID card. Please try again.");
  } finally {
    setDownloading(false);
  }
};

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted": return "text-green-600 bg-green-100 border-green-200";
      case "rejected": return "text-red-600 bg-red-100 border-red-200";
      default: return "text-yellow-600 bg-yellow-100 border-yellow-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "accepted": return "✅";
      case "rejected": return "❌";
      default: return "⏳";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Candidate Portal
          </h1>
          <p className="text-gray-600 text-lg">
            Check your registration status and download your ID card
          </p>
        </div>

        {/* Email Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-200">
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
              Enter your registered email address
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && fetchUserData()}
                className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              <button
                onClick={fetchUserData}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Checking...
                  </span>
                ) : (
                  "Check Status"
                )}
              </button>
            </div>
            {error && (
              <p className="text-red-600 text-center mt-3 font-medium">{error}</p>
            )}
          </div>
        </div>

        {/* User Data Display */}
        {userData && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                Registration Details
              </h2>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700 mb-2 sm:mb-0">Full Name:</span>
                  <span className="text-gray-900 font-medium">{userData.fullName}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700 mb-2 sm:mb-0">Email:</span>
                  <span className="text-gray-900">{userData.email}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700 mb-2 sm:mb-0">Institution:</span>
                  <span className="text-gray-900">{userData.institution}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700 mb-2 sm:mb-0">Committee:</span>
                  <span className="text-blue-600 font-semibold">{userData.committee}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700 mb-2 sm:mb-0">Country:</span>
                  <span className="text-green-600 font-semibold">{userData.country}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700 mb-2 sm:mb-0">Payment Method:</span>
                  <span className="text-gray-900">{userData.payment}</span>
                </div>
                
                <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg border ${getStatusColor(userData.status || "pending")}`}>
                  <span className="font-semibold mb-2 sm:mb-0">Registration Status:</span>
                  <span className="font-bold flex items-center gap-2 text-lg">
                    {getStatusIcon(userData.status || "pending")}
                    {(userData.status || "pending").toUpperCase()}
                  </span>
                </div>

                {userData.experience && (
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-semibold block mb-2 text-gray-700">MUN Experience:</span>
                    <p className="text-gray-700 bg-white p-3 rounded border border-gray-300">{userData.experience}</p>
                  </div>
                )}
              </div>
            </div>

            {/* ID Card Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Delegate ID Card</h2>
                <button
                  id="download-btn"
                  onClick={downloadIDCard}
                  disabled={downloading}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px] justify-center"
                >
                  {downloading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </span>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Card
                    </>
                  )}
                </button>
              </div>

              {/* ID Card Design - Using simple background colors */}
              <div id="id-card" className="bg-gray-900 rounded-2xl p-6 text-white shadow-2xl border-2 border-gray-700">
                {/* Header */}
                <div className="text-center mb-6 border-b border-gray-600 pb-4">
                  <h3 className="text-2xl font-bold mb-2 text-white">FMUN 2024</h3>
                  <p className="text-gray-300 font-medium">Model United Nations</p>
                  <p className="text-gray-400 text-sm mt-1">Official Delegate Identification</p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                  {/* Profile Picture Area */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center border-4 border-gray-600 shadow-lg">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold mb-2 text-white">{userData.fullName}</h4>
                    <p className="text-gray-300 mb-3 font-medium">{userData.institution}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-400 font-medium">Committee</p>
                        <p className="font-semibold text-white">{userData.committee}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-medium">Country</p>
                        <p className="font-semibold text-white">{userData.country}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-medium">Status</p>
                        <p className="font-semibold capitalize text-white">{userData.status || "pending"}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-medium">Delegate ID</p>
                        <p className="font-semibold text-white text-xs">{userData.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center border-t border-gray-600 pt-4">
                  <p className="text-gray-400 text-xs mb-2">
                    This ID must be presented at the registration desk
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>FMUN 2024</span>
                    <span>Official Event</span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Important Notes:
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Present this ID card at the registration desk for verification</li>
                  <li>• Keep this ID visible throughout the event</li>
                  <li>• Status must show "ACCEPTED" to participate in sessions</li>
                  {userData.status === "pending" && (
                    <li className="font-semibold">• Your application is under review by the organizing committee</li>
                  )}
                  {userData.status === "rejected" && (
                    <li className="font-semibold text-red-600">• Please contact the organizers for clarification</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;