import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaSnapchat, FaBirthdayCake } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Have a question or want to work together? I&apos;d love to hear from you.
          </motion.p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-700/50 rounded-xl border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-700/50 rounded-xl border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 bg-gray-700/50 rounded-xl border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Contact Cards */}
          <div className="space-y-4">
            <motion.div
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-400">lucky824123@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <FaPhone className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <p className="text-gray-400">+91 9870936624</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <FaBirthdayCake className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Date of Birth</h3>
                  <p className="text-gray-400">March 5, 1998</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
            <h3 className="text-white font-medium mb-4">Connect with me</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/veekash1998"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-xl hover:bg-blue-500/20 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-gray-300 hover:text-blue-400 text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vikash-kumar-verma-63441622b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-xl hover:bg-blue-500/20 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-gray-300 hover:text-blue-400 text-xl" />
              </motion.a>
              <motion.a
                href="https://snapchat.com/t/iEGDMugM"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-xl hover:bg-blue-500/20 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaSnapchat className="text-gray-300 hover:text-yellow-400 text-xl" />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/VeekashVerma/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700/50 rounded-xl hover:bg-blue-500/20 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiLeetcode className="text-gray-300 hover:text-orange-400 text-xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
