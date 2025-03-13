import { motion } from "framer-motion";
import { FaCalendar, FaUser } from "react-icons/fa";

const BlogPost = ({ title, excerpt, date, author, tags, image, onReadMore }) => {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h2 
          className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.p 
          className="text-gray-400 mb-4 line-clamp-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {excerpt}
        </motion.p>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaCalendar className="text-blue-400" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-purple-400" />
            <span>{author}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Read More Button */}
        <motion.button
          className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onReadMore}
        >
          Read More
        </motion.button>
      </div>
    </motion.article>
  );
};

export default BlogPost;
