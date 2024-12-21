import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DataContext } from "../context/DataProvider";

const BlogCard = ({ post }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
    >
      <NavLink to={`/Blog/${post.id}`}>
        <img
          src={"/public/assets/default.png"}  //!post?.image ?? 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-400">
            {post.category} • {post.date}
          </p>
          <h3 className="text-xl font-semibold text-white mt-2">
            {post.title}
          </h3>
          <p className="text-gray-400 mt-2">{post.excerpt}</p>
        </div>
      </NavLink>
    </motion.div>
  );
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { blog } = useContext(DataContext);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setPostsPerPage(9);
    } else {
      setPostsPerPage(6);
    }
  }, [windowWidth]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=" min-h-screen text-white pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-12 flex justify-between items-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-900 text-gray-400 px-4 py-2 rounded-full disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>
        <span>
          Page {currentPage} of {Math.ceil(blog.length / postsPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastPost >= blog.length}
          className="bg-gray-900 text-gray-400 px-4 py-2 rounded-full disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Blog;
