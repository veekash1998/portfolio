import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { FaMobile, FaPaintBrush, FaServer, FaBirthdayCake, FaEnvelope, FaPhone, FaSnapchat, FaCloudUploadAlt } from "react-icons/fa";
import { FaComputer, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { DataContext } from "../context/DataProvider";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Aman from "/assets/aman.jpeg";
import Ashutosh from "/assets/ashutosh.jpeg";
import Manish from "/assets/manish.jpeg";
import Mehak from "/assets/mehak.jpeg";
import Ramanpreet from "/assets/ramanpreet.jpeg";
import Saksham from "/assets/saksham.jpeg";
import Mohit from "/assets/mohit.jpeg";
import Bhawya from "/assets/bhawya.jpeg";
import Shikha from "/assets/shikha.jpeg";
import Haramrit from "/assets/haramrit.jpeg";
import profileImage from "/assets/PicsArt_01-19-08.20.48.jpg";

const About = () => {
  const { user } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const recommendations = [
    {
      name: "Aman Deep",
      title: "Software Engineer",
      link: "https://www.linkedin.com/in/aman-deep-320459146/",
      company: "Electrowaves Electronics",
      image: Aman,
      text: "I am delighted to recommend Vikash Sir for his outstanding mentorship and guidance during my internship period at Electrowaves Electronics. Working on the Inventory Management System project, I had the privilege of experiencing firsthand his expertise in Spring Boot and React Native. Vikash Kumar verma is not just an exceptional software engineer but also an excellent mentor. His deep understanding of backend technologies and frontend frameworks was invaluable in helping me grasp the complexities of our project. He patiently explained intricate concepts and always made himself available to answer my questions, no matter how trivial they might have seemed. In summary, Vikash sir is a remarkable mentor and a skilled engineer. His contributions to my professional growth have been significant, and I am confident that his leadership and expertise will continue to benefit many others in the future. I highly recommend him to any team or project, as he brings both technical prowess and exceptional mentorship qualities.",
    },
    {
      name: "Shikha Singhal",
      title: "Sr. Embedded System Engineer",
      company: "Zenergize Tech",
      link: "https://www.linkedin.com/in/shikhasinghal2075/",
      image: Shikha,
      text: "I have known Vikash for over an year now, he is a person with great problem solving ability and positive attitude. Many times we have worked together in collaboration towards a task where he has shown his creativity and extraordinary aptitude for UI development. He is friendly, helpful, and always willing to try new things to go an extra mile. I have no doubt that Vikash would be a great asset to any team.",
    },
    {
      name: "Saksham Sharma",
      title: "Software Dev | FreelancerUIT",
      company: "Zenergize Tech",
      link: "https://www.linkedin.com/in/saksham-sharma-050311202/",
      image: Saksham,
      text: "I highly recommend Vikash as an outstanding Full Stack Developer. Having collaborated closely with him, I am continually impressed by his expertise in a diverse set of technologies, including React, React Native, UI development, and Spring Boot. Vikash seamlessly navigates both front-end and back-end development, delivering high-quality code within project timelines. His analytical mindset, effective communication skills, and proficiency in a broad range of technologies make him an invaluable asset to any development team. Vikash's commitment to continuous learning and staying updated with industry trends further underscores his dedication to excellence.",
    },
    {
      name: "Mohit Negi",
      title: "UIET | Software Developer | Zenergize (R&D)",
      company: "Zenergize Tech",
      link: "https://www.linkedin.com/in/mohit-negi-6299b9195/",
      image: Mohit,
      text: "I am pleased to recommend Vikash, for his exceptional expertise in advanced technological domains and his ability to seamlessly integrate frontend and backend systems. He possesses in-depth knowledge and practical experience with technologies such as React, React Native, Git, Spring Boot, and various other frameworks and tools. Vikash's technical proficiency, coupled with his commitment to delivering robust and efficient solutions, makes him a highly valuable asset to any team or organization.",
    },
    {
      name: "Bhawya Gupta",
      title: "Software Dev | FreelancerUIT",
      company: "Zenergize Tech",
      link: "https://www.linkedin.com/in/bhawya-gupta-a74a37215/",
      image: Bhawya,
      text: "I've had the pleasure of working with Vikash at Zenergize, where he consistently impressed me with his dedication and problem-solving abilities. He approaches challenges with a positive attitude and always delivers high-quality work. Vikash is also a great collaborator who contributes positively to team dynamics. I highly recommend him for any software development role.",
    },
    {
      name: "Ramanpreet Kaur",
      title: "Embedded System Engineer",
      company: "Zenergize Tech",
      link: "https://www.linkedin.com/in/ramanpreet-kaur-a90b30189/",
      image: Ramanpreet,
      text: "Vikash is someone who is extremely helpful. We work in the same company but in different teams. There was a time when I was struggling with finalizing user interface for an application. He helped me improving the user interface. With my personal experience I can say he has the ability to design visually appealing and effective graphics. He is really creative and open to new ideas. Vikash would be an asset to any team.",
    },
    {
      name: "Ashutosh",
      title: "MERM stack Developer",
      company: "Electrowaves Electronics",
      link: "https://www.linkedin.com/in/ashutosh-11543914a/",
      image: Ashutosh,
      text: "I had the privilege of working alongside Vikash on numerous projects, and it was indeed an honor to have him as my senior. Vikash consistently exemplified unwavering dedication to our team's success, always delivering his utmost effort to ensure the timely completion of assignments. One of Vikash's standout attributes was his exceptional time management prowess. His ability to orchestrate and prioritize tasks with precision was nothing short of remarkable. Thanks to Vikash's adept organizational skills, our projects consistently met their deadlines, even under challenging circumstances. Moreover, Vikash possessed a unique talent for maintaining a sense of calm and fostering productivity during high-pressure situations. His leadership style was marked by a calming presence, which not only reduced stress within the team but also inspired us to work more effectively together.",
    },
    {
      name: "Mehak Saini",
      title: "Software developer",
      company: "Dogma Systems",
      link: "https://www.linkedin.com/in/mehak-saini-275995145/",
      image: Mehak,
      text: "I am delighted to wholeheartedly recommend Vikash, as an exceptional and accomplished full stack developer, specializing in Java and React Native. With an impressive mastery of UI principles and a delightful personality, he has been an absolute joy to collaborate with. Vikash consistently showcases unparalleled expertise and an innate talent for fostering collaboration, making him an invaluable asset to any team fortunate enough to have him on board.",
    },
    {
      name: "Manish Kumar",
      title: "Full Stack Developer",
      company: "Fusiontecz Solutions",
      link: "https://www.linkedin.com/in/manish-kumar-2759b6206/",
      image: Manish,
      text: "Vikash sir and I worked together on several projects, and I was lucky to call him my senior. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time. He had excellent time management skills and had a knack for keeping everyone calm and productive during intense crunch periods.",
    },
    {
      name: "Haramrit Singh",
      title: "Student at Punjab Engineering College",
      company: "Pyramid Electronics",
      link: "https://www.linkedin.com/in/haramrit-singh-59a775251/",
      image: Haramrit,
      text: "I had the distinct pleasure of working with Vikash Kumar on several projects where he served as my senior. Vikash is an exceptional Full Stack Developer whose expertise spans both front-end and back-end technologies, including React, React Native, and Spring Boot. His commitment to delivering high-quality code within tight deadlines is truly commendable. Vikash's ability to manage time efficiently, even in high-pressure situations, sets him apart as a leader who fosters both productivity and calm within the team. His strong analytical skills and dedication to continuous learning make him an invaluable asset to any project. I highly recommend Vikash to any organization looking for a skilled and reliable developer.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="space-y-12 text-white">
      {/* Hero Section */}
      <motion.div 
        className="bg-gray-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-blue-500"
          />
          <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
            <FaEnvelope className="text-white" />
          </div>
        </motion.div>
        
        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {user?.name}
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-400 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Senior {user?.occupation}
          </motion.p>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-blue-400" />
              <span>{user?.contact}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaBirthdayCake className="text-blue-400" />
              <span>{user?.dob}</span>
            </div>
          </div>

          <motion.div 
            className="flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/vikash-kumar-verma-63441622b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="text-3xl hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://snapchat.com/t/iEGDMugM"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="text-3xl hover:text-yellow-300 transition-colors"
            >
              <FaSnapchat />
            </motion.a>
            <motion.a
              href="https://github.com/veekash1998"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="text-3xl hover:text-gray-500 transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/VeekashVerma/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="text-3xl hover:text-yellow-500 transition-colors"
            >
              <SiLeetcode />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* About Text Section */}
      <motion.div 
        className="bg-gray-800 rounded-3xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="space-y-4 text-gray-300">
          <p>
            Hello! I'm a passionate software developer working in Pyramid
            Electronics as a full stack developer. I completed my graduation from
            Tula's Institute in Dehradun. Currently, I am a Senior Developer with
            the Research and Development team at Pyramid Electronics Pvt. Ltd.
          </p>
          <p>
            In my role, I am deeply involved in researching, designing,
            implementing, and managing software programs. I take pride in testing
            and evaluating new programs, identifying areas for improvement in
            existing software, and developing modifications to enhance their
            performance. Writing and implementing efficient code is at the core of
            my work.
          </p>
          <p>
            I have a strong enthusiasm for gaming, and I love to immerse myself in
            the latest tech trends. My job brings me immense satisfaction, and I
            enjoy collaborating with my team, frequently hanging out and
            exchanging ideas. I also make it a point to attend tech meetups
            regularly to stay updated and network with like-minded professionals.
          </p>
        </div>
      </motion.div>

      <div className="mt-12 flex-1">
        <h1 className="text-3xl font-bold text-white">What I&apos;m Doing</h1>
        <div className="pt-6 flex flex-wrap gap-8">
          <div className="bg-gray-700 flex justify-center items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(31%-1rem)] rounded-2xl p-4">
            <FaComputer className="w-28 text-blue-400"/>
            <div>
              <h2 className="text-white font-semibold">Backend Developer</h2>
              <p className="text-s mt-2 text-gray-400">Crafting robust server-side solutions with Spring Boot and Node.js.</p>
            </div>
          </div>
          <div className="bg-gray-700 flex justify-center items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(31%-1rem)] rounded-2xl p-4">
            <FaServer className="w-28 text-purple-400"/>
            <div>
              <h2 className="text-white font-semibold">Website</h2>
              <p className="text-s mt-2 text-gray-400">Crafting responsive and interactive websites using React and HTML.</p>
            </div>
          </div>
          <div className="bg-gray-700 flex justify-center items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(31%-1rem)] rounded-2xl p-4">
            <FaPaintBrush className="w-28 text-green-400"/>
            <div>
              <h2 className="text-white font-semibold">UI Design</h2>
              <p className="text-s mt-2 text-gray-400">Designing intuitive and visually appealing user interfaces using Adobe suite, Canva, and Picsart.</p>
            </div>
          </div>
          <div className="bg-gray-700 flex justify-center items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(31%-1rem)] rounded-2xl p-4">
            <FaMobile className="w-28 text-yellow-400"/>
            <div>
              <h2 className="text-white font-semibold">Mobile Apps</h2>
              <p className="text-s mt-2 text-gray-400">Developing cross-platform mobile applications with React Native and Expo.</p>
            </div>
          </div>
          <div className="bg-gray-700 flex justify-center items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(31%-1rem)] rounded-2xl p-4">
            <FaServer className="w-28 text-orange-400"/>
            <div>
              <h2 className="text-white font-semibold">Backend</h2>
              <p className="text-s mt-2 text-gray-400">Architecting and implementing server-side solutions using Spring Boot and Node.js.</p>
            </div>
          </div>
          <div className="bg-gray-700 flex justify-center items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(31%-1rem)] rounded-2xl p-4">
            <FaCloudUploadAlt className="w-28 text-cyan-400"/>
            <div>
              <h2 className="text-white font-semibold">DevOps</h2>
              <p className="text-s mt-2 text-gray-400">Implementing CI/CD pipelines, containerization, and cloud infrastructure management.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex-1">
        <h1 className="text-3xl font-bold text-white">Skills</h1>
        <Skills />
      </div>

      <div className="mt-12 flex-1">
        <h1 className="text-3xl font-bold text-white">Project</h1>
        <Projects />
      </div>

      <div className="mt-12 flex-1">
        <h1 className="text-3xl font-bold text-white mb-6">Testimonials</h1>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 50}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                className="w-1/2 flex-shrink-0 px-4"
                whileHover={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gray-700 rounded-2xl p-6 h-64 flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-12 h-12 rounded-full mr-4 cursor-pointer"
                      onClick={() => openModal(rec.image)}
                    />
                    <div>
                      <a
                        href={rec.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-white hover:text-blue-400 transition-colors"
                      >
                        {rec.name}
                      </a>
                      <p className="text-gray-400">
                        {rec.title} | {rec.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow overflow-auto sidebar">
                    <p className="text-gray-300">{rec.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img
              src={modalImage}
              alt="Profile"
              className="max-w-2xl max-h-2xl rounded-lg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
