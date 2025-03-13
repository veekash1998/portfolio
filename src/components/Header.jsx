import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaImages, FaFileAlt, FaBlog, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const screenName = location.pathname.replace("/", "") || "About";

  const navItems = [
    { path: "/", label: "About", icon: <FaHome /> },
    { path: "/Gallery", label: "Gallery", icon: <FaImages /> },
    { path: "/Resume", label: "Resume", icon: <FaFileAlt /> },
    { path: "/Blog", label: "Blog", icon: <FaBlog /> },
    { path: "/Contact", label: "Contact", icon: <FaEnvelope /> },
    { path: "/Project", label: "Project", icon: <FaProjectDiagram /> },
  ];

  return (
    <motion.div
      className="flex justify-between items-center py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {screenName}
      </motion.h1>

      <motion.nav 
        className="flex gap-2 bg-gray-800/50 backdrop-blur-md p-2 rounded-2xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default Header;
