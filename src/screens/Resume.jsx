import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaCode, FaDownload } from "react-icons/fa";

const Resume = () => {
  const education = [
    {
      id: 1,
      school: "Tula's Institute Dehradun",
      degree: "Bachelor's degree, Civil Engineering",
      period: "2016 - 2020",
      description: "Completed my Bachelor's degree with a focus on structural engineering. Participated in various technical workshops and engineering competitions. Developed strong analytical and problem-solving skills applicable to software development."
    },
    {
      id: 2,
      school: "Govt. High School, Aurangabad",
      degree: "Intermediate (PCM)",
      period: "2014 - 2016",
      description: "Studied Physics, Chemistry, and Mathematics with excellent academic performance. Participated in science exhibitions and mathematics competitions that helped develop logical reasoning skills."
    },
    {
      id: 3,
      school: "DAV Public School Nabinagar",
      degree: "Matriculation",
      period: "2013 - 2014",
      description: "Completed matriculation with distinction. Active participation in school's tech club fostered early interest in technology and computer science fundamentals."
    }
  ];

  const experience = [
    {
      id: 1,
      company: "Pyramid Electronics",
      position: "Senior Full Stack Developer",
      period: "2023 - Present",
      description: "Leading the Research and Development team, focusing on designing and implementing scalable software solutions. Responsible for architecting backend systems using Spring Boot and developing responsive front-end interfaces with React and React Native. Mentoring junior developers and implementing CI/CD pipelines for streamlined deployment.",
      technologies: ["React", "React Native", "Spring Boot", "Node.js", "CI/CD", "DevOps"]
    },
    {
      id: 2,
      company: "Electrowaves Electronics",
      position: "Software Developer",
      period: "2022 - 2023",
      description: "Developed and maintained enterprise-level applications, focusing on both frontend and backend development. Led the implementation of inventory management systems and e-commerce platforms. Collaborated with cross-functional teams to deliver high-quality software solutions on time.",
      technologies: ["React", "React Native", "Spring Boot", "UI/UX", "RESTful APIs"]
    },
    {
      id: 3,
      company: "TCA Training & Development",
      position: "Software Trainee",
      period: "2021 - 2022",
      description: "Gained hands-on experience in web development technologies and best practices. Contributed to the development of responsive web applications and participated in code reviews and technical discussions. Learned agile methodologies and collaborative development workflows.",
      technologies: ["HTML/CSS", "JavaScript", "React Basics", "Git", "Agile"]
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "React Native", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Material UI", "Redux"]
    },
    {
      category: "Backend",
      items: ["Spring Boot", "Node.js", "Express", "RESTful APIs", "Java", "MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      category: "DevOps & Version Control",
      items: ["Git", "GitHub", "GitLab", "Docker", "CI/CD", "AWS", "Heroku"]
    },
    {
      category: "Problem-Solving and Debugging",
      items: ["Chrome DevTools", "React DevTools", "Postman", "Debugging Strategies", "Unit Testing", "Integration Testing"]
    },
    {
      category: "Communication and Teamwork",
      items: ["Agile/Scrum", "Jira", "Team Leadership", "Technical Documentation", "Code Reviews", "Mentoring"]
    }
  ];

  // Function to handle PDF download
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/VikashVerma_ApplicationForm.pdf';
    link.download = 'Vikash_Kumar_Verma_Resume.pdf';
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
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Resume
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              My professional journey, experience, and technical expertise.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 md:mt-0"
          >
            <motion.button
              className="py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
            >
              <FaDownload className="text-white" />
              <span>Download Full Resume</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Experience */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-xl">
                <FaBriefcase className="text-blue-400 text-xl" />
      </div>
              <h2 className="text-2xl font-bold text-white">Experience</h2>
          </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative pl-6 border-l-2 border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                    <p className="text-blue-400">{exp.company}</p>
        </div>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-300 hover:bg-gray-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
      </div>
                </motion.div>
              ))}
          </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-xl">
                <FaGraduationCap className="text-purple-400 text-xl" />
          </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
        </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative pl-6 border-l-2 border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full" />
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-purple-400">{edu.school}</p>
      </div>
                  <p className="text-sm text-gray-400 mb-3">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
          </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Skills */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-xl">
                <FaCode className="text-green-400 text-xl" />
      </div>
              <h2 className="text-2xl font-bold text-white">Skills</h2>
          </div>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
        </div>
                </motion.div>
              ))}
      </div>
          </motion.div>

          {/* Skill Levels - Progress Bars */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Skill Levels</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-white">
          <span>Frontend</span>
                  <span>90%</span>
        </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ delay: 1.2, duration: 1 }}
                  ></motion.div>
        </div>
      </div>

              <div>
                <div className="flex justify-between mb-1 text-white">
          <span>Backend</span>
                  <span>85%</span>
        </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-purple-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1.3, duration: 1 }}
                  ></motion.div>
        </div>
      </div>

              <div>
                <div className="flex justify-between mb-1 text-white">
                  <span>DevOps & Version Control</span>
                  <span>80%</span>
        </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-green-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ delay: 1.4, duration: 1 }}
                  ></motion.div>
        </div>
      </div>

              <div>
                <div className="flex justify-between mb-1 text-white">
          <span>Problem-Solving and Debugging</span>
                  <span>88%</span>
        </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "88%" }}
                    transition={{ delay: 1.5, duration: 1 }}
                  ></motion.div>
        </div>
      </div>

              <div>
                <div className="flex justify-between mb-1 text-white">
          <span>Communication and Teamwork</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-red-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ delay: 1.6, duration: 1 }}
                  ></motion.div>
                </div>
              </div>
        </div>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadResume}
            >
              <FaCertificate className="text-white" />
              <span>Download Resume PDF</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
