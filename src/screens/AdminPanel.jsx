import React, { useState, useEffect } from "react";
import { db } from "../Firebase/Firebase.js";
import { collection, getDocs, updateDoc, doc, query, orderBy, deleteDoc } from "firebase/firestore";

const AdminPanel = ({ onLogout }) => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [activeTab, setActiveTab] = useState("analytics");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const q = query(collection(db, "registrations"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      }));
      setRegistrations(data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      if (status === "rejected") {
        await deleteDoc(doc(db, "registrations", id));
        fetchRegistrations();
      } else {
        await updateDoc(doc(db, "registrations", id), { 
          status,
          updatedAt: new Date() 
        });
        fetchRegistrations();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const updateUserDetails = async (id, updatedData) => {
    try {
      await updateDoc(doc(db, "registrations", id), {
        ...updatedData,
        updatedAt: new Date()
      });
      setEditingUser(null);
      setEditForm({});
      fetchRegistrations();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const startEditing = (user) => {
    setEditingUser(user.id);
    setEditForm({
      committee: user.committee || "",
      country: user.country || "",
      category: user.category || "delegate",
      party: user.party || "",
      character: user.character || ""
    });
  };

  const cancelEditing = () => {
    setEditingUser(null);
    setEditForm({});
  };

  const feeStructure = {
    delegate: 2000,
    observer: 2500,
    qawali: 1500
  };

  const calculateAnalytics = () => {
    const analytics = {
      totalRegistrations: registrations.length,
      totalAccepted: registrations.filter(r => r.status === "accepted").length,
      totalRejected: registrations.filter(r => r.status === "rejected").length,
      totalPending: registrations.filter(r => !r.status || r.status === "pending").length,
      committees: {},
      categories: {
        delegate: 0,
        observer: 0,
        qawali: 0
      },
      totalAmount: 0
    };

    registrations.forEach(reg => {
      if (reg.status === "accepted") {
        if (reg.committee) {
          analytics.committees[reg.committee] = (analytics.committees[reg.committee] || 0) + 1;
        }

        const category = reg.category || "delegate";
        if (analytics.categories[category] !== undefined) {
          analytics.categories[category]++;
        }

        const fee = feeStructure[category] || 0;
        analytics.totalAmount += fee;
      }
    });

    return analytics;
  };

  const filteredRegistrations = registrations.filter(reg => {
    const matchesFilter = filter === "all" || reg.status === filter;
    const matchesSearch = reg.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || (reg.category || "delegate") === categoryFilter;
    return matchesFilter && matchesSearch && matchesCategory;
  });

  const analytics = calculateAnalytics();

  const committees = ["UNHRC", "UNSC", "DISEC", "WHO", "UNICEF", "ECOSOC", "SPECPOL"];
  const countries = ["Pakistan", "USA", "China", "UK", "India", "Turkey", "Germany", "France", "Japan", "Brazil"];
  const categories = ["delegate", "observer", "qawali"];

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
          <div className="text-3xl font-bold">{analytics.totalRegistrations}</div>
          <div className="text-blue-100">Total Registrations</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg">
          <div className="text-3xl font-bold">{analytics.totalAccepted}</div>
          <div className="text-green-100">Accepted</div>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-lg">
          <div className="text-3xl font-bold">{analytics.totalRejected}</div>
          <div className="text-red-100">Rejected</div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl p-6 shadow-lg">
          <div className="text-3xl font-bold">Rs. {analytics.totalAmount.toLocaleString()}</div>
          <div className="text-yellow-100">Total Collected</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Participants by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(analytics.categories).map(([category, count]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-gray-800">{count}</div>
                  <div className="text-gray-600 capitalize">{category}</div>
                </div>
                <div className="text-lg font-semibold">
                  Rs. {(feeStructure[category] * count).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Committee Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(analytics.committees).map(([committee, count]) => (
            <div key={committee} className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl">
              <div className="font-medium text-gray-800">{committee}</div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-bold">
                {count}
              </div>
            </div>
          ))}
          {Object.keys(analytics.committees).length === 0 && (
            <div className="col-span-full text-center py-8 text-gray-500">
              No committee assignments yet
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Fee Structure</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold">Category</th>
                <th className="px-4 py-3 text-left font-semibold">Fee</th>
                <th className="px-4 py-3 text-left font-semibold">Total Participants</th>
                <th className="px-4 py-3 text-left font-semibold">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(feeStructure).map(([category, fee]) => (
                <tr key={category} className="border-b">
                  <td className="px-4 py-3 capitalize font-medium">{category}</td>
                  <td className="px-4 py-3">Rs. {fee.toLocaleString()}</td>
                  <td className="px-4 py-3">{analytics.categories[category]}</td>
                  <td className="px-4 py-3 font-bold">
                    Rs. {(fee * analytics.categories[category]).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading registrations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FMUN Admin Panel
              </h1>
              <p className="text-gray-600 mt-2">Manage participant registrations</p>
            </div>
            <button 
              onClick={onLogout}
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-105"
            >
              Logout
            </button>
          </div>

          <div className="flex space-x-2 mt-6">
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${activeTab === "analytics" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Analytics Dashboard
            </button>
            <button
              onClick={() => setActiveTab("registrations")}
              className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${activeTab === "registrations" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Manage Registrations
            </button>
          </div>
        </div>

        {activeTab === "analytics" ? (
          <AnalyticsTab />
        ) : (
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>

                <div className="flex gap-2">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="capitalize">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    { key: "all", label: "All", color: "gray" },
                    { key: "pending", label: "Pending", color: "yellow" },
                    { key: "accepted", label: "Accepted", color: "green" },
                    { key: "rejected", label: "Rejected", color: "red" }
                  ].map((filterBtn) => (
                    <button
                      key={filterBtn.key}
                      onClick={() => setFilter(filterBtn.key)}
                      className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${filter === filterBtn.key ? `bg-${filterBtn.color}-500 text-white` : `bg-${filterBtn.color}-100 text-${filterBtn.color}-700 hover:bg-${filterBtn.color}-200`}`}
                    >
                      {filterBtn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-blue-500 to-purple-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Candidate</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Contact</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Committee</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Country</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Date</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredRegistrations.length === 0 ? (
                      <tr>
                        <td colSpan="8" className="px-6 py-8 text-center text-gray-500">
                          No registrations found
                        </td>
                      </tr>
                    ) : (
                      filteredRegistrations.map((reg) => (
                        <tr key={reg.id} className="hover:bg-blue-50 transition duration-150">
                          <td className="px-6 py-4">
                            <div className="font-semibold text-gray-900">{reg.fullName}</div>
                            <div className="text-sm text-gray-500">{reg.institution}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-gray-900">{reg.whatsapp}</div>
                            <div className="text-sm text-gray-500">{reg.payment || "No payment"}</div>
                          </td>
                          <td className="px-6 py-4">
                            {editingUser === reg.id ? (
                              <select
                                value={editForm.category}
                                onChange={(e) => setEditForm({...editForm, category: e.target.value})}
                                className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 capitalize"
                              >
                                {categories.map(cat => (
                                  <option key={cat} value={cat}>{cat}</option>
                                ))}
                              </select>
                            ) : (
                              <span className="font-medium capitalize">{reg.category || "delegate"}</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {editingUser === reg.id ? (
                              <select
                                value={editForm.committee}
                                onChange={(e) => setEditForm({...editForm, committee: e.target.value})}
                                className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                              >
                                <option value="">Select Committee</option>
                                {committees.map(com => (
                                  <option key={com} value={com}>{com}</option>
                                ))}
                              </select>
                            ) : (
                              <span className="font-medium">{reg.committee || "Not assigned"}</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {editingUser === reg.id ? (
                              <select
                                value={editForm.country}
                                onChange={(e) => setEditForm({...editForm, country: e.target.value})}
                                className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                              >
                                <option value="">Select Country</option>
                                {countries.map(country => (
                                  <option key={country} value={country}>{country}</option>
                                ))}
                              </select>
                            ) : (
                              <span className="font-medium">{reg.country || "Not assigned"}</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${reg.status === 'accepted' ? 'bg-green-100 text-green-800' : reg.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {reg.status || 'pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {reg.createdAt?.toDate?.().toLocaleDateString() || 'N/A'}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col sm:flex-row gap-2">
                              {editingUser === reg.id ? (
                                <>
                                  <button
                                    onClick={() => updateUserDetails(reg.id, editForm)}
                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm font-medium transition duration-200"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={cancelEditing}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm font-medium transition duration-200"
                                  >
                                    Cancel
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => startEditing(reg)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium transition duration-200"
                                  >
                                    Edit
                                  </button>
                                  {reg.status !== 'accepted' && (
                                    <button
                                      onClick={() => updateStatus(reg.id, 'accepted')}
                                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm font-medium transition duration-200"
                                    >
                                      Accept
                                    </button>
                                  )}
                                  <button
                                    onClick={() => updateStatus(reg.id, 'rejected')}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-sm font-medium transition duration-200"
                                  >
                                    Reject
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 border border-blue-100">
              <div className="text-center text-gray-600">
                Showing {filteredRegistrations.length} of {registrations.length} total registrations
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;