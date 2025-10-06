import React, { useState } from "react";
import { db } from "../Firebase/Firebase.js";
import { collection, addDoc } from "firebase/firestore";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    committee: "",
    country: "",     
    experience: "",
    payment: ""
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Starting registration process...");
      
      // Enhanced validation
      if (!formData.email.includes('@') || !formData.email.includes('.')) {
        throw new Error("Please enter a valid email address");
      }

      if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
        throw new Error("Please enter a valid full name");
      }

      if (!formData.institution.trim()) {
        throw new Error("Please enter your institution name");
      }

      if (!formData.committee) {
        throw new Error("Please select a committee");
      }

      if (!formData.country) {
        throw new Error("Please select a country");
      }

      if (!formData.payment) {
        throw new Error("Please select a payment method");
      }

      // Prepare data for Firestore
      const registrationData = {
        fullName: formData.fullName.trim(),
        email: formData.email.toLowerCase().trim(),
        institution: formData.institution.trim(),
        committee: formData.committee,
        country: formData.country,
        experience: formData.experience.trim(),
        payment: formData.payment,
        createdAt: new Date(),
        status: "pending",
        timestamp: Date.now()
      };

      console.log("Attempting to write to Firestore...", registrationData);

      // Add to Firestore with timeout
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Request timeout - check internet connection")), 10000)
      );

      const writePromise = addDoc(collection(db, "registrations"), registrationData);
      
      const docRef = await Promise.race([writePromise, timeoutPromise]);
      console.log("✅ Document written successfully with ID:", docRef.id);

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        institution: "",
        committee: "",
        country: "",
        experience: "",
        payment: ""
      });

      // Auto hide success message
      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error("❌ Registration error:", err);
      
      // Specific error handling
      if (err.code === 'permission-denied') {
        setError("Firestore Permission Denied. Please check security rules.");
      } else if (err.code === 'unavailable') {
        setError("Network error. Please check your internet connection.");
      } else if (err.code === 'invalid-argument') {
        setError("Invalid data format. Please check your inputs.");
      } else if (err.message.includes('timeout')) {
        setError("Request timeout. Please check your internet connection.");
      } else {
        setError(err.message || "Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const countries = [
    "Pakistan", "USA", "China", "UK", "India", "Turkey", "Germany", 
    "France", "Japan", "Brazil", "Canada", "Australia", "Russia", "South Korea"
  ];

  const committees = [
    "UNHRC", "UNSC", "DISEC", "WHO", "UNICEF", "ECOSOC", "SPECPOL"
  ];

  const paymentMethods = [
    "Easypaisa", "JazzCash", "Bank Transfer", "Stripe", "PayPal"
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="bg-white text-gray-800 shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-2xl mx-auto border border-blue-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            FMUN Registration
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Join us for an unforgettable FMUN experience
          </p>
        </div>

        {/* Status Messages */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-600 font-semibold text-center">
              ✅ Registration Successful! Check your email for confirmation.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-center font-medium">
              ❌ {error}
            </p>
            <p className="text-red-500 text-sm text-center mt-2">
              If this continues, please contact support.
            </p>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter your full name"
                required
                minLength="2"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Institution */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution *
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Your school/college"
                required
              />
            </div>

            {/* Committee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Committee *
              </label>
              <select
                name="committee"
                value={formData.committee}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
                required
              >
                <option value="">Select Committee</option>
                {committees.map(committee => (
                  <option key={committee} value={committee}>{committee}</option>
                ))}
              </select>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country Preference *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
                required
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method *
              </label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
                required
              >
                <option value="">Select Payment</option>
                {paymentMethods.map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              MUN Experience (Optional)
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Share your previous MUN experience (if any)..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg font-bold text-white transition duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Registration...
              </span>
            ) : (
              'Register Now'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;