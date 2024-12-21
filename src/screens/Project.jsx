import { useState } from 'react';

const projects = [
  { id: 1, name: 'Finance App', category: 'Frontend', image: '../assets/default.png' },
  { id: 2, name: 'Orizon Dashboard', category: 'Frontend', image: '/path/to/orizon-image.jpg' },
  { id: 3, name: 'Fundo Website', category: 'Frontend', image: '/path/to/fundo-image.jpg' },
  { id: 4, name: 'E-commerce API', category: 'Backend', image: '/path/to/ecommerce-api-image.jpg' },
  { id: 5, name: 'Chat Application', category: 'Full Stack', image: '/path/to/chat-app-image.jpg' },
  { id: 6, name: 'AI Integration', category: 'POC', image: '/path/to/ai-integration-image.jpg' },
  // Add more projects as needed
];

const Project = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'POC', 'Pending', 'Working'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="mt-8  text-white">
      
      <div className="flex space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category ? 'bg-gray-700 text-gray-100' : 'bg-gray-800 text-gray-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/public/assets/default.png" alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-4 bg-gray-700">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-400">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;