import { motion } from "framer-motion";
import { FaUsers, FaCode, FaProjectDiagram, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Projects",
      value: "24",
      change: "+12%",
      icon: <FaProjectDiagram className="text-blue-400 text-2xl" />,
      color: "blue",
    },
    {
      title: "Active Clients",
      value: "18",
      change: "+8%",
      icon: <FaUsers className="text-purple-400 text-2xl" />,
      color: "purple",
    },
    {
      title: "Code Commits",
      value: "1,234",
      change: "+25%",
      icon: <FaCode className="text-green-400 text-2xl" />,
      color: "green",
    },
    {
      title: "Revenue",
      value: "$45K",
      change: "+15%",
      icon: <FaChartLine className="text-orange-400 text-2xl" />,
      color: "orange",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: "New Project Started",
      description: "E-commerce website development",
      time: "2 hours ago",
      type: "project",
    },
    {
      id: 2,
      title: "Client Meeting",
      description: "Discussion about project requirements",
      time: "4 hours ago",
      type: "meeting",
    },
    {
      id: 3,
      title: "Code Review",
      description: "Frontend components review",
      time: "6 hours ago",
      type: "code",
    },
    // Add more activities
  ];

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
            Dashboard
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Overview of your portfolio and activities.
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-${stat.color}-500/20 rounded-xl`}>
                {stat.icon}
              </div>
              <span className={`text-${stat.color}-400 text-sm font-medium`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400">{stat.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className={`p-2 rounded-lg bg-${activity.type === 'project' ? 'blue' : activity.type === 'meeting' ? 'purple' : 'green'}-500/20`}>
                  {activity.type === 'project' ? <FaProjectDiagram className="text-blue-400" /> :
                   activity.type === 'meeting' ? <FaUsers className="text-purple-400" /> :
                   <FaCode className="text-green-400" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-1">{activity.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{activity.description}</p>
                  <p className="text-gray-500 text-xs">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              className="p-4 bg-gray-700/30 rounded-xl text-left hover:bg-gray-700/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-2 bg-blue-500/20 rounded-lg w-fit mb-2">
                <FaProjectDiagram className="text-blue-400" />
              </div>
              <h3 className="text-white font-medium">New Project</h3>
              <p className="text-gray-400 text-sm">Start a new project</p>
            </motion.button>

            <motion.button
              className="p-4 bg-gray-700/30 rounded-xl text-left hover:bg-gray-700/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-2 bg-purple-500/20 rounded-lg w-fit mb-2">
                <FaUsers className="text-purple-400" />
              </div>
              <h3 className="text-white font-medium">Add Client</h3>
              <p className="text-gray-400 text-sm">Add a new client</p>
            </motion.button>

            <motion.button
              className="p-4 bg-gray-700/30 rounded-xl text-left hover:bg-gray-700/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-2 bg-green-500/20 rounded-lg w-fit mb-2">
                <FaCode className="text-green-400" />
              </div>
              <h3 className="text-white font-medium">Code Review</h3>
              <p className="text-gray-400 text-sm">Review recent code</p>
            </motion.button>

            <motion.button
              className="p-4 bg-gray-700/30 rounded-xl text-left hover:bg-gray-700/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-2 bg-orange-500/20 rounded-lg w-fit mb-2">
                <FaChartLine className="text-orange-400" />
              </div>
              <h3 className="text-white font-medium">Analytics</h3>
              <p className="text-gray-400 text-sm">View analytics</p>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
