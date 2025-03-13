import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTags, FaCalendar, FaUser, FaArrowLeft } from "react-icons/fa";
import { DataContext } from "../context/DataProvider";
import BlogPost from "../components/BlogPost";

// Blog post images using free Unsplash images
const blogImages = {
  technology: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  design: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
  development: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  "ux design": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop",
  "web design": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
  "ui design": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
  marketing: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop",
  "data science": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  innovation: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
  "ux/ui design": "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=1000&auto=format&fit=crop",
  default: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"
};

// Main categories for filtering (simplified list)
const mainCategories = ["All", "Technology", "Design", "Development", "UX/UI Design"];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { blog } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);
  const [displayDetails, setDisplayDetails] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setPostsPerPage(6);
    } else {
      setPostsPerPage(3);
    }
  }, [windowWidth]);

  // Reset to first page when search term or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Filter posts based on search term and selected category
  const filteredPosts = blog.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || 
      post.category.toLowerCase() === selectedCategory.toLowerCase() || 
      (selectedCategory === "Design" && post.category.toLowerCase().includes("design"));
    
    return matchesSearch && matchesCategory;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle opening a blog post in detail view
  const handleReadMore = (post) => {
    setSelectedPost(post);
    setDisplayDetails(true);
    window.scrollTo(0, 0);
  };

  // Handle closing the detail view
  const handleCloseDetails = () => {
    setDisplayDetails(false);
    setSelectedPost(null);
  };

  // Get appropriate image for a blog post
  const getPostImage = (post) => {
    if (post.image && !post.image.includes('example.com')) {
      return post.image;
    }
    
    const category = post.category.toLowerCase();
    return blogImages[category] || blogImages.default;
  };

  // If a post is selected, display the detail view
  if (displayDetails && selectedPost) {
    return (
      <div className="space-y-8">
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 md:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="relative flex justify-between items-center">
            <motion.button
              className="mb-4 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: -5 }}
              onClick={handleCloseDetails}
            >
              <FaArrowLeft />
              <span>Back to all posts</span>
            </motion.button>
          </div>
          
          <motion.div 
            className="bg-gray-800/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative h-64 md:h-96">
              <img 
                src={getPostImage(selectedPost)} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedPost.title}
                </motion.h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-400" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-purple-400" />
                    <span>Vikash Kumar Verma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTags className="text-green-400" />
                    <span>{selectedPost.category}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <motion.div 
                className="prose prose-invert prose-blue max-w-none"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-xl text-gray-300 mb-6">{selectedPost.excerpt}</p>
                
                <p className="text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Insights</h2>
                
                <p className="text-gray-300 mb-4">
                  Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
                </p>
                
                <ul className="list-disc pl-6 text-gray-300 mb-6">
                  <li className="mb-2">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</li>
                  <li className="mb-2">Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</li>
                  <li className="mb-2">Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi.</li>
                  <li>Cras dapibus. Vivamus elementum semper nisi.</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
                
                <p className="text-gray-300">
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.
                </p>
              </motion.div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Related Tag</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors">
                    {selectedPost.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

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
            Blog
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Explore my thoughts, tutorials, and insights about software development, technology, and more.
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
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 bg-gray-700/50 rounded-xl border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {mainCategories.map(category => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap ${
                selectedCategory === category 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-700/50 text-white hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <FaTags className={selectedCategory === category ? "text-white" : "text-blue-400"} />
              <span>{category}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Blog Status */}
      <div className="text-gray-400 text-sm">
        {filteredPosts.length === 0 ? (
          <p>No blog posts found matching your criteria.</p>
        ) : (
          <p>Showing {Math.min(indexOfFirstPost + 1, filteredPosts.length)} - {Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} posts</p>
        )}
      </div>

      {/* Blog Posts Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {currentPosts.length > 0 ? (
          currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index % 6) * 0.05 }}
            >
              <BlogPost 
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author="Vikash Kumar Verma"
                tags={[post.category]}
                image={getPostImage(post)}
                onReadMore={() => handleReadMore(post)}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <motion.p 
              className="text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No blog posts found. Try a different search term or category.
            </motion.p>
          </div>
        )}
      </motion.div>

      {/* Pagination */}
      {filteredPosts.length > postsPerPage && (
        <motion.div 
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
            className={`px-4 py-2 rounded-xl transition-colors ${
              currentPage === 1 
              ? 'bg-gray-700/30 text-gray-500' 
              : 'bg-gray-700/50 text-white hover:bg-gray-700'
            }`}
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNumber;
            if (totalPages <= 5) {
              pageNumber = i + 1;
            } else if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                className={`px-4 py-2 rounded-xl transition-colors ${
                  currentPage === pageNumber
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-700/50 text-white hover:bg-gray-700'
                }`}
              >
                {pageNumber}
        </button>
            );
          })}
          
        <button
          onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-xl transition-colors ${
              currentPage === totalPages 
              ? 'bg-gray-700/30 text-gray-500' 
              : 'bg-gray-700/50 text-white hover:bg-gray-700'
            }`}
          >
            Next
        </button>
        </motion.div>
      )}
    </div>
  );
};

export default Blog;
