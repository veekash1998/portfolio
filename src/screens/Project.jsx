import { useState } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Completed', 'POC', 'Work in Progress'];
  
  const projects = [
    // Completed Projects
    {
      id: 1,
      title: "OCPP 1.6 Platform",
      description: "A comprehensive web and mobile platform for EV charging infrastructure management using OCPP 1.6 protocol.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba53b0998?q=80&w=1024&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "OCPP 1.6", "MQTT"],
      category: "Completed",
      github: "https://github.com/yourusername/ocpp16-platform",
      demo: "https://ocpp16-platform.demo.com",
      features: [
        "Charger Management",
        "Real-time Communication",
        "Transaction Monitoring",
        "Remote Control & Diagnostics",
      ],
    },
    {
      id: 2,
      title: "OCPP 2.0.1 Platform",
      description: "Next-generation EV charging platform with enhanced security and feature set based on OCPP 2.0.1 protocol.",
      image: "https://images.unsplash.com/photo-1611501564693-77b9d85ba55d?q=80&w=1024&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "Nest.js", "PostgreSQL", "OCPP 2.0.1"],
      category: "Completed",
      github: "https://github.com/yourusername/ocpp201-platform",
      demo: "https://ocpp201-platform.demo.com",
      features: [
        "Enhanced Security Features",
        "Smart Charging Support",
        "Device Management",
        "Advanced Configuration",
      ],
    },
    {
      id: 3,
      title: "PESolar Inverter System",
      description: "Monitoring and management solution for solar inverters with detailed analytics and reporting.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1024&auto=format&fit=crop",
      technologies: ["React Native", "Node.js", "InfluxDB", "Grafana", "MQTT"],
      category: "Completed",
      github: "https://github.com/yourusername/pesolar-inverter",
      demo: "https://pesolar-inverter.demo.com",
      features: [
        "Real-time Energy Monitoring",
        "Performance Analytics",
        "Maintenance Alerts",
        "Energy Production Reporting",
      ],
    },
    {
      id: 4,
      title: "Zap Cab",
      description: "An advanced ride-hailing application with real-time tracking and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1581015637934-43dbdbe64ff6?q=80&w=1024&auto=format&fit=crop",
      technologies: ["React Native", "Firebase", "Google Maps API", "Stripe"],
      category: "Completed",
      github: "https://github.com/yourusername/zap-cab",
      demo: "https://zap-cab.demo.com",
      features: [
        "Real-time Location Tracking",
        "Driver-Rider Matching",
        "In-app Payments",
        "Ride History & Analytics",
      ],
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing professional experience and projects.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1024&auto=format&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "Completed",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio.com",
      features: [
        "Modern UI/UX Design",
        "Responsive Layout",
        "Project Showcase",
        "Interactive Elements",
      ],
    },
    {
      id: 6,
      title: "AAA Traveler",
      description: "A travel planning and booking platform for seamless vacation experiences.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1024&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Travel APIs"],
      category: "Completed",
      github: "https://github.com/yourusername/aaa-traveler",
      demo: "https://aaa-traveler.demo.com",
      features: [
        "Itinerary Planning",
        "Hotel & Flight Booking",
        "Activity Recommendations",
        "Travel Insights",
      ],
    },
    
    // POC Projects
    {
      id: 7,
      title: "MQTT Charting System",
      description: "A proof-of-concept for real-time data visualization through MQTT protocol integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1024&auto=format&fit=crop",
      technologies: ["MQTT", "Chart.js", "Node.js", "WebSockets"],
      category: "POC",
      github: "https://github.com/yourusername/mqtt-charting",
      demo: "https://mqtt-charting.demo.com",
      features: [
        "Real-time Data Visualization",
        "MQTT Protocol Integration",
        "Customizable Charts",
        "Data Export Features",
      ],
    },
    {
      id: 8,
      title: "Charger Simulator (MQTT)",
      description: "Simulation platform for testing EV charging infrastructure without physical hardware.",
      image: "https://images.unsplash.com/photo-1558484978-f8c29e11acb0?q=80&w=1024&auto=format&fit=crop",
      technologies: ["Node.js", "MQTT", "Docker", "WebSocket"],
      category: "POC",
      github: "https://github.com/yourusername/charger-simulator",
      demo: "https://charger-simulator.demo.com",
      features: [
        "OCPP Protocol Testing",
        "Hardware Simulation",
        "Scenario Testing",
        "Performance Analysis",
      ],
    },
    {
      id: 9,
      title: "Inverter Simulator",
      description: "Simulation tool for solar inverter behavior under various conditions.",
      image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1024&auto=format&fit=crop",
      technologies: ["Python", "Flask", "SocketIO", "D3.js"],
      category: "POC",
      github: "https://github.com/yourusername/inverter-simulator",
      demo: "https://inverter-simulator.demo.com",
      features: [
        "Different Weather Scenarios",
        "Performance Prediction",
        "Fault Simulation",
        "Data Logging & Analysis",
      ],
    },
    {
      id: 10,
      title: "Bulk Energy Data Fetcher",
      description: "Tool for retrieving and processing large volumes of energy consumption data.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1024&auto=format&fit=crop",
      technologies: ["Python", "Node.js", "PostgreSQL", "Redis"],
      category: "POC",
      github: "https://github.com/yourusername/energy-data-fetcher",
      demo: "https://energy-data-fetcher.demo.com",
      features: [
        "Bulk Data Retrieval",
        "Data Transformation",
        "Export Capabilities",
        "Scheduling & Automation",
      ],
    },
    {
      id: 11,
      title: "AWS Push Notification App",
      description: "Implementation of push notifications using AWS services for cross-platform applications.",
      image: "https://images.unsplash.com/photo-1591439657848-9f4b9ce06f9f?q=80&w=1024&auto=format&fit=crop",
      technologies: ["AWS SNS", "React Native", "Firebase", "Node.js"],
      category: "POC",
      github: "https://github.com/yourusername/aws-push-notifications",
      demo: "https://aws-push-demo.demo.com",
      features: [
        "Cross-platform Notifications",
        "Topic Subscriptions",
        "Scheduled Notifications",
        "Analytics & Tracking",
      ],
    },
    {
      id: 12,
      title: "Firmware Update System",
      description: "OTA firmware update system for IoT devices with rollback capabilities.",
      image: "https://images.unsplash.com/photo-1563770557593-bda3e2533e91?q=80&w=1024&auto=format&fit=crop",
      technologies: ["Node.js", "MQTT", "AWS IoT", "Embedded C"],
      category: "POC",
      github: "https://github.com/yourusername/firmware-update",
      demo: "https://firmware-update.demo.com",
      features: [
        "OTA Updates",
        "Version Management",
        "Rollback Capability",
        "Update Progress Tracking",
      ],
    },
    {
      id: 13,
      title: "Multi-Provider Authentication",
      description: "Implementation of authentication using multiple providers like Google, Facebook, and LinkedIn.",
      image: "https://images.unsplash.com/photo-1614064548237-096d7a4af1b1?q=80&w=1024&auto=format&fit=crop",
      technologies: ["OAuth 2.0", "Node.js", "React", "MongoDB"],
      category: "POC",
      github: "https://github.com/yourusername/multi-auth",
      demo: "https://multi-auth.demo.com",
      features: [
        "Google Authentication",
        "Facebook Integration",
        "LinkedIn Login",
        "User Profile Merging",
      ],
    },
    {
      id: 14,
      title: "Razorpay Wallet Integration",
      description: "Digital wallet implementation using Razorpay payment gateway services.",
      image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=1024&auto=format&fit=crop",
      technologies: ["Razorpay API", "React", "Node.js", "Express"],
      category: "POC",
      github: "https://github.com/yourusername/razorpay-wallet",
      demo: "https://razorpay-wallet.demo.com",
      features: [
        "Secure Transactions",
        "Balance Management",
        "Transaction History",
        "Auto-recharge Options",
      ],
    },
    {
      id: 15,
      title: "Refrane Website Redesign",
      description: "Modern redesign of an existing website with improved UX and performance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1024&auto=format&fit=crop",
      technologies: ["React", "Tailwind CSS", "Next.js", "Optimized Assets"],
      category: "POC",
      github: "https://github.com/yourusername/refrane-redesign",
      demo: "https://refrane-redesign.demo.com",
      features: [
        "Performance Optimization",
        "Responsive Design",
        "Accessibility Improvements",
        "SEO Enhancements",
      ],
    },
    {
      id: 16,
      title: "Vector Graph Visualization",
      description: "Advanced graph visualization tool using vector-based rendering for complex data relationships.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1024&auto=format&fit=crop",
      technologies: ["D3.js", "SVG", "React", "TypeScript"],
      category: "POC",
      github: "https://github.com/yourusername/vector-graph",
      demo: "https://vector-graph.demo.com",
      features: [
        "Interactive Visualizations",
        "Zoom & Pan Controls",
        "Data Filtering",
        "Export Capabilities",
      ],
    },
    
    // Work in Progress
    {
      id: 17,
      title: "Traveler Website",
      description: "Comprehensive travel planning website currently under development.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1024&auto=format&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      category: "Work in Progress",
      github: "https://github.com/yourusername/traveler-website",
      demo: "https://traveler-website.demo.com",
      features: [
        "Personalized Recommendations",
        "Interactive Maps",
        "Trip Planner",
        "User Reviews & Ratings",
      ],
    },
    {
      id: 18,
      title: "Gym Management System",
      description: "Full-stack solution for gym management including backend services and mobile app.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1024&auto=format&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "WebSockets"],
      category: "Work in Progress",
      github: "https://github.com/yourusername/gym-management",
      demo: "https://gym-management.demo.com",
      features: [
        "Member Management",
        "Workout Tracking",
        "Class Scheduling",
        "Progress Analytics",
      ],
    },
    {
      id: 19,
      title: "Zenergize CMS Microservice",
      description: "Microservice architecture for content management system with enhanced scalability.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1024&auto=format&fit=crop",
      technologies: ["Microservices", "Docker", "Kubernetes", "Node.js"],
      category: "Work in Progress",
      github: "https://github.com/yourusername/zenergize-cms",
      demo: "https://zenergize-cms.demo.com",
      features: [
        "Content Management",
        "Service Discovery",
        "API Gateway",
        "Load Balancing",
      ],
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            Projects
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Explore my portfolio of real-world projects and proof-of-concept demonstrations showcasing my skills and experience.
          </motion.p>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-xl transition-colors ${
              filter === category 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
              : 'bg-gray-800/50 backdrop-blur-xl text-gray-300 hover:bg-gray-700/70'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm backdrop-blur-md ${
                    project.category === 'Completed' 
                      ? 'bg-green-500/20 text-green-400'
                      : project.category === 'POC'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
        ))}
      </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="text-gray-300" />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt className="text-white" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;