import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { motion } from "framer-motion";
import {
  FaBirthdayCake,
  FaEnvelope,
  FaPhone,
  FaSnapchat,
} from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import profileImage from "/assets/PicsArt_01-19-08.20.48.jpg";


const Sidebar = () => {
  const { user } = useContext(DataContext);
  const splitText = (text) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        {word}&nbsp;
      </motion.span>
    ));
  };
  return (
    <motion.div
      className="text-center p-4 rounded-3xl bg-gray-800 text-white flex flex-col justify-between h-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full my-10"
        />
        <h2 className="text-2xl font-bold mb-2">{user?.name}</h2>
        <p className="mb-4">Senior {user?.occupation}</p>
        <ul className="space-y-2 text-xs text-left flex flex-col items-center">
          <li className="flex items-center">
            <FaEnvelope className="mr-2" /> {user?.email}
          </li>
          <li className="flex items-center">
            <FaPhone className="mr-2" /> {user?.contact}
          </li>
          <li className="flex items-center">
            <FaBirthdayCake className="mr-2" /> {user?.dob}
          </li>
        </ul>
          <p className="mt-16 text-gray-400">
            {splitText(
              "Senior Developer at Pyramid Electronics Pvt. Ltd., specializing in software research, design, implementation, and management. My role involves testing and evaluating new programs, enhancing existing software, and writing efficient code."
            )}
          </p>
      </div>
      <div className="mt-4 flex justify-center space-x-4 pb-4">
        <motion.a
          href="https://www.linkedin.com/in/vikash-kumar-verma-63441622b/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.5, rotate: 360 }}
          className="text-3xl hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://snapchat.com/t/iEGDMugM"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.5, rotate: 360 }}
          className="text-3xl hover:text-yellow-300 transition-colors"
        >
          <FaSnapchat />
        </motion.a>
        <motion.a
          href="https://github.com/veekash1998"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.5, rotate: 360 }}
          className="text-3xl hover:text-gray-500 transition-colors"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://leetcode.com/u/VeekashVerma/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.5, rotate: 360 }}
          className="text-3xl hover:text-yellow-500 transition-colors"
        >
          <SiLeetcode />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Sidebar;
