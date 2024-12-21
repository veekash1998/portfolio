import { motion } from "framer-motion";

const projects = [
  {
    title: "Pyramid Charge (OCPP2.0)",
    description: "Developed a server based on OCPP2.0 protocol, a user-friendly mobile app, and an interactive web platform for public EV charging in India.",
    technologies: ["Spring Boot", "ReactJS", "React Native", "Core UI", "Razorpay", "AWS", "Google Firebase", "WebSocket", "REST API"],
    features: ["Real-time charger identification", "User reservations", "Secure mobile payments"]
  },
  {
    title: "EVAC",
    features: ["AC Home Changing", "Charge monitoring"],
    description: "Simplified AC-based charging process for electric vehicle owners at home with user-friendly interface for scheduling and monitoring.",
    technologies: ["ReactJS", "React Native", "Tailwind CSS", "Bootstrap", "AWS", "Google Firebase", "REST API"]
  },
  {
    title: "PE Solar",
    description: "Designed to monitor energy generation through solar inverters, tracking and recording data for comprehensive insights into solar power production.",
    technologies: ["Spring Boot", "ReactJS", "React Native", "AWS", "REST API"],
    features: ["Inverter health check", "Comprehensive energy generation reports"]
  },
  {
    title: "PEVCMS (OCPP1.6)",
    description: "Focused on chargers supporting OCPP 1.6j protocol, empowering users with various EV charging features.",
    technologies: ["Spring Boot", "React Native", "Razorpay", "AWS", "Google Firebase", "WebSocket", "REST API"],
    features: ["Charger locator", "Session monitoring", "Auto-charger feature"]
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="bg-gray-700 rounded-2xl shadow-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Technologies:</h4>
        <div className="flex flex-wrap">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {project.features && (
        <div>
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-400">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;