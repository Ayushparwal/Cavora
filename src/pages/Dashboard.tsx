import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../firebase";

const Dashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectPurpose, setProjectPurpose] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleCreateProject = () => {
    if (!projectName || !projectPurpose || !collegeName || !location)
      return alert("Please fill in all fields.");
    console.log("✅ New Project Created", {
      projectName,
      projectPurpose,
      collegeName,
      location,
    });

    // Reset & Navigate
    setShowModal(false);
    setProjectName("");
    setProjectPurpose("");
    setCollegeName("");
    setLocation("");
    navigate(`/project/${encodeURIComponent(projectName)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-6 py-8 text-gray-900 dark:text-white">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        <br/>
      
        {user?.displayName
          ? `${user.displayName}'s Dashboard`
          : user?.email
          ? `${user.email.split("@")[0]}'s Dashboard`
          : "Your Dashboard"}
      </motion.h1>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search your projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition border-2 border-dashed border-blue-400 dark:border-blue-500"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl text-blue-600 dark:text-blue-300">
              <Plus size={28} />
            </div>
            <h2 className="text-xl font-semibold">Create New Project</h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upload a dataset and get the best ML model recommendation.
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-[90%] max-w-md shadow-xl space-y-4"
            >
              <h2 className="text-xl font-bold mb-2 text-center">Create New Project</h2>

              <div>
                <label className="block mb-1 text-sm font-medium">Project Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Ex: House Price Prediction"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Project Purpose</label>
                <textarea
                  value={projectPurpose}
                  onChange={(e) => setProjectPurpose(e.target.value)}
                  placeholder="Ex: To find best regression model for house price"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">College / Institution</label>
                <input
                  type="text"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  placeholder="Ex: IIT Delhi"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ex: New Delhi"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateProject}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Create
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
