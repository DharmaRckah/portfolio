import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
const Projects: React.FC = () => {
  const projects = [{
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    github: '#',
    live: '#'
  }, {
    title: 'Real-time Chat Application',
    description: 'A real-time messaging platform with private chats, group conversations, and file sharing capabilities.',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'JWT'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    github: '#',
    live: '#'
  }, {
    title: 'Task Management System',
    description: 'A comprehensive project management tool with task tracking, team collaboration, and progress visualization.',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    github: '#',
    live: '#'
  }, {
    title: 'Blog Platform',
    description: 'A feature-rich blogging platform with content management, user comments, and analytics.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    github: '#',
    live: '#'
  }];
  return <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Featured <span className="text-[#36BCF7]">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => <div key={index} className="bg-black/50 backdrop-blur-md rounded-lg overflow-hidden border border-[#36BCF7]/30 hover:border-[#36BCF7] transition-all hover:shadow-lg hover:shadow-[#36BCF7]/20">
            <div className="h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 text-xs bg-[#36BCF7]/10 text-[#36BCF7] rounded-md border border-[#36BCF7]/30">
                    {tech}
                  </span>)}
              </div>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <GithubIcon size={16} className="mr-1" />
                  <span>Code</span>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#36BCF7] hover:text-[#2da8e0] transition-colors">
                  <span>Live Demo</span>
                  <ExternalLinkIcon size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          More Projects on <span className="text-[#36BCF7]">GitHub</span>
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          These are just a few highlights from my portfolio. Visit my GitHub to
          see more projects, including open-source contributions, experiments,
          and personal projects.
        </p>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#36BCF7] text-black font-medium rounded-md hover:bg-[#2da8e0] transition-colors">
          <GithubIcon size={18} className="mr-2" />
          View GitHub Profile
        </a>
      </div>
    </div>;
};
export default Projects;