import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaImage, FaTimes, FaDownload } from "react-icons/fa";
import Pic1 from "/assets/PicsArt_01-19-08.20.48.jpg";
import Aman from "/assets/aman.jpeg";
import Ashutosh from "/assets/ashutosh.jpeg";
import Manish from "/assets/manish.jpeg";
import Mehak from "/assets/mehak.jpeg";
import Ramanpreet from "/assets/ramanpreet.jpeg";
import Saksham from "/assets/saksham.jpeg";
import Shikha from "/assets/shikha.jpeg";
import Mohit from "/assets/mohit.jpeg";
import Bhawya from "/assets/bhawya.jpeg";
import Haramrit from "/assets/haramrit.jpeg";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [showCount, setShowCount] = useState(9); // Start by showing 9 images
  
  const images = [
    {
      id: 1,
      src: Pic1,
      category: "Profile",
      title: "Vikash Kumar Verma",
      description: "Senior Full Stack Developer at Pyramid Electronics"
    },
    {
      id: 2,
      src: Aman,
      category: "Team",
      title: "Amandeep",
      description: "Software Engineer at Electrowaves Electronics"
    },
    {
      id: 3,
      src: Ashutosh,
      category: "Team",
      title: "Ashutosh",
      description: "MERM Stack Developer at Electrowaves Electronics"
    },
    {
      id: 4,
      src: Manish,
      category: "Team",
      title: "Manish",
      description: "Full Stack Developer at Fusiontecz Solutions"
    },
    {
      id: 5,
      src: Mehak,
      category: "Team",
      title: "Mehak Saini",
      description: "Software Developer at Dogma Systems"
    },
    {
      id: 6,
      src: Ramanpreet,
      category: "Team",
      title: "Ramanpreet Kaur",
      description: "Embedded System Engineer at Zenergize Tech"
    },
    {
      id: 7,
      src: Saksham,
      category: "Team",
      title: "Saksham Sharma",
      description: "Software Developer | Freelancer at UIT"
    },
    {
      id: 8,
      src: Shikha,
      category: "Team",
      title: "Shikha Singhal",
      description: "Sr. Embedded System Engineer at Zenergize Tech"
    },
    {
      id: 9,
      src: Mohit,
      category: "Team",
      title: "Mohit Negi",
      description: "UIET | Software Developer | Zenergize (R&D)"
    },
    {
      id: 10,
      src: Bhawya,
      category: "Team",
      title: "Bhawya Gupta",
      description: "Software Developer | Freelancer at UIT"
    },
    {
      id: 11,
      src: Haramrit,
      category: "Team",
      title: "Haramrit Singh",
      description: "Student at Punjab Engineering College"
    }
  ];

  // Get unique categories
  const categories = ["All", ...new Set(images.map(img => img.category))];
  
  // Filter images based on search and category
  const filteredImages = images.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Update displayed images whenever filters change or show count changes
  useEffect(() => {
    setDisplayedImages(filteredImages.slice(0, showCount));
  }, [filteredImages, showCount]);

  // Load more images handler
  const handleLoadMore = () => {
    setShowCount(prev => prev + 6);
  };
  
  // Reset displayed count when search or filter changes
  useEffect(() => {
    setShowCount(9);
  }, [searchTerm, selectedCategory]);

  // Handle opening the modal when an image is clicked
  const openImageModal = (image) => {
    setSelectedImage(image);
  };
  
  // Handle closing the modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Handle download image
  const downloadImage = (e, image) => {
    e.stopPropagation();
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `${image.title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            Gallery
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Explore my professional journey through this visual collection featuring team members, projects, and memorable moments.
          </motion.p>
        </div>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div 
        className="flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-800/50 backdrop-blur-xl p-4 rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative flex-1 w-full md:max-w-md">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full pl-10 pr-4 py-2 bg-gray-700/50 rounded-xl border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {categories.map(category => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap ${
                selectedCategory === category 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-700/50 text-white hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <FaFilter className={selectedCategory === category ? "text-white" : "text-blue-400"} />
              <span>{category}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Gallery Status */}
      <div className="text-gray-400 text-sm">
        {filteredImages.length === 0 ? (
          <p>No images found matching your criteria.</p>
        ) : (
          <p>Showing {displayedImages.length} of {filteredImages.length} images</p>
        )}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {displayedImages.length > 0 ? (
          displayedImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index % 9) * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => openImageModal(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-medium mb-1">{image.title}</h3>
                <p className="text-gray-400 text-sm">{image.category}</p>
                {image.description && (
                  <p className="text-blue-300 text-xs mt-1">{image.description}</p>
                )}
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button 
                  className="p-2 bg-gray-900/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-600"
                  onClick={(e) => downloadImage(e, image)}
                >
                  <FaDownload className="text-white" />
                </button>
                <div className="p-2 bg-gray-900/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaImage className="text-white" />
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 py-12 text-center">
            <p className="text-gray-400 text-lg">No images found matching your search criteria.</p>
          </div>
        )}
      </motion.div>

      {/* Load More Button - show only if there are more filtered results to load */}
      {displayedImages.length < filteredImages.length && (
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLoadMore}
          >
            Load More
          </motion.button>
        </motion.div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <motion.button
                  className="p-2 bg-blue-600/70 rounded-full text-white hover:bg-blue-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => downloadImage(e, selectedImage)}
                >
                  <FaDownload />
                </motion.button>
                <motion.button
                  className="p-2 bg-gray-900/70 rounded-full text-white hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeImageModal}
                >
                  <FaTimes />
                </motion.button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900/70">
                <h2 className="text-white text-lg font-medium">{selectedImage.title}</h2>
                <p className="text-gray-300 text-sm">{selectedImage.category}</p>
                {selectedImage.description && (
                  <p className="text-blue-300 text-xs mt-1">{selectedImage.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 
