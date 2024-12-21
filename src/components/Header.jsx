import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const screenName = location.pathname.replace("/", "") || "Home";

  const navItems = [
    { to: "/", name: "Home" },
    { to: "/Blog", name: "Blog" },
    { to: "/Gallery", name: "Gallery" },
    { to: "/Project", name: "Project" },
    { to: "/Resume", name: "Resume"},
    { to: "/Contact", name: "Contact" },
  ];

  return (
    <motion.div
      className=" text-white  flex justify-between items-center flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-transparent flex-grow flex items-center">
        <h1 className="text-3xl font-bold">{screenName}</h1>
      </div>
      <nav className="space-x-4 flex w-2/4  right-10 justify-evenly overflow-auto sidebar  bg-gray-700 rounded-2xl p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `hover:text-gray-400 flex items-center ${
                isActive ? "" : "text-gray-400"
              }`
            }
          >
            {/* <span className="mr-2">{item.icon}</span> */}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
};

export default Header;
