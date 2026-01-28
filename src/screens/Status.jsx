import React, { useState } from "react";
import { db } from "../Firebase/Firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const Status = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted": 
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected": 
        return "bg-red-100 text-red-800 border-red-200";
      default: 
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "accepted": return "✅";
      case "rejected": return "❌";
      default: return "⏳";
    }
  };

  const getStatusMessage = (status) => {
    switch (status) {
      case "accepted":
        return "Your registration has been accepted! You can now participate in the event.";
      case "rejected":
        return "Your registration was not accepted. Please contact the organizers for more information.";
      default:
        return "Your application is under review by the organizing committee.";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Registration Status Portal
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Check your FMUN registration status and details
          </p>
        </div>

        {/* Email Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-blue-100">
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
                required
              />
              <button
                onClick={fetchUserData}
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
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
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
            {/* Status Banner */}
            <div className={`p-6 ${getStatusColor(userData.status || "pending")} border-b`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Registration Status</h2>
                  <p className="text-lg font-semibold flex items-center gap-2">
                    {getStatusIcon(userData.status || "pending")}
                    {(userData.status || "pending").toUpperCase()}
                  </p>
                </div>
                <div className="text-sm md:text-base">
                  {getStatusMessage(userData.status || "pending")}
                </div>
              </div>
            </div>

            {/* Registration Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Registration Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Personal Info Column */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-medium text-gray-500 mb-1">Full Name</p>
                    <p className="text-lg font-semibold text-gray-900">{userData.fullName}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-medium text-gray-500 mb-1">Email Address</p>
                    <p className="text-lg font-semibold text-gray-900">{userData.email}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-medium text-gray-500 mb-1">Institution</p>
                    <p className="text-lg font-semibold text-gray-900">{userData.institution}</p>
                  </div>
                </div>

                {/* Event Details Column */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-medium text-gray-500 mb-1">Committee</p>
                    <p className="text-lg font-semibold text-blue-600">{userData.committee}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-medium text-gray-500 mb-1">Country</p>
                    <p className="text-lg font-semibold text-green-600">{userData.country}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-medium text-gray-500 mb-1">Payment Method</p>
                    <p className="text-lg font-semibold text-gray-900">{userData.payment}</p>
                  </div>
                </div>
              </div>

              {/* Experience Section (if exists) */}
              {userData.experience && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">MUN Experience</h4>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-gray-700 whitespace-pre-line">{userData.experience}</p>
                  </div>
                </div>
              )}

              {/* Registration Date */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-sm text-gray-500">
                    <p>Registration Date: {userData.createdAt?.toDate?.().toLocaleDateString() || 'N/A'}</p>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full font-semibold ${getStatusColor(userData.status || "pending")}`}>
                    <span className="mr-2">{getStatusIcon(userData.status || "pending")}</span>
                    <span>{(userData.status || "pending").toUpperCase()}</span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Important Information:
                </h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Please bring a printed copy of your registration details to the event</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Status must show "ACCEPTED" to participate in conference sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>For any queries, please contact: fmun26@gmail.com</span>
                  </li>
                  {userData.status === "pending" && (
                    <li className="flex items-start font-semibold">
                      <span className="mr-2">•</span>
                      <span>Your application is currently being reviewed. Please check back later for updates.</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2024 FMUN - Model United Nations. All rights reserved.</p>
          <p className="mt-1">For technical support, contact: support@fmun.com</p>
        </div>
      </div>
    </div>
  );
};

export default Status;