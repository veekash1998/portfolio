import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";

const MainRoute = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
          <Header />
        </div>
      </div>
      
      <motion.main 
        className="pt-24 pb-8 px-4 md:px-6 lg:px-8"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-[2000px] mx-auto">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </motion.main>
    </motion.div>
  );
};

export default MainRoute;
