import { motion } from "framer-motion";
import { FaJava, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiCanva, SiExpo, SiJavascript, SiMongodb, SiMysql, SiRazorpay, SiSpringboot, SiWordpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skillsData = [
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Expo", icon: SiExpo, color: "#000020" },
  { name: "Razorpay", icon: SiRazorpay, color: "#02042B" },
];

const SkillHexagon = ({ skill, index }) => {
  return (
    <motion.div
      className="w-28 h-28 border-b flex flex-col items-center justify-center  text-gray-400 rounded-2xl m-5"
      whileHover={{ scale: 1.2, rotate: 360 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1.1 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center">
        <skill.icon className="text-4xl mb-2" style={{ color: skill.color }} />
        <p className="text-xs">{skill.name}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="mt-6 flex flex-wrap justify-center max-w-5xlmx-auto">
      {skillsData.map((skill, index) => (
        <SkillHexagon key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default Skills;
