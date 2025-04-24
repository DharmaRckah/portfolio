import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
const Skills: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const skillsData = [{
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Material UI', 'Core UI', 'Bootstrap']
  }, {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Firebase']
  }, {
    category: 'DevOps',
    skills: ['AWS EC2', 'AWS S3', 'Docker', 'Kubernetes', 'Linux', 'VPS Hosting', 'SSL Certificates']
  }, {
    category: 'Programming',
    skills: ['JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'SQL', 'DSA']
  }, {
    category: 'Tools',
    skills: ['Git', 'VS Code', 'Postman', 'MongoDB Compass', 'Docker Desktop']
  }];
  return <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Technical <span className="text-[#36BCF7]">Skills</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillsData.map((category, index) => <div key={index} className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-[#36BCF7]/30 hover:border-[#36BCF7] transition-colors">
            <h2 className="text-2xl font-bold mb-6 text-[#36BCF7]">
              {category.category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => <span key={skillIndex} className="px-4 py-2 bg-[#36BCF7]/10 text-white rounded-full border border-[#36BCF7]/30">
                  {skill}
                </span>)}
            </div>
          </div>)}
      </div>
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          Libraries & <span className="text-[#36BCF7]">Frameworks</span>
        </h2>
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-[#36BCF7]/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 bg-[#36BCF7]/10 rounded-lg">
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="h-16 mb-4" />
              <span className="text-white font-medium">React</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#36BCF7]/10 rounded-lg">
              <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" className="h-16 mb-4" />
              <span className="text-white font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#36BCF7]/10 rounded-lg">
              <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="MongoDB" className="h-16 mb-4" />
              <span className="text-white font-medium">MongoDB</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#36BCF7]/10 rounded-lg">
              <img src="https://cdn.worldvectorlogo.com/logos/express-109.svg" alt="Express.js" className="h-16 mb-4" />
              <span className="text-white font-medium">Express</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          DevOps & <span className="text-[#36BCF7]">Hosting</span>
        </h2>
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-[#36BCF7]/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 bg-[#36BCF7]/10 rounded-lg">
              <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" className="h-16 mb-4" />
              <span className="text-white font-medium">AWS</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#36BCF7]/10 rounded-lg">
              <img src="https://cdn.worldvectorlogo.com/logos/docker.svg" alt="Docker" className="h-16 mb-4" />
              <span className="text-white font-medium">Docker</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#36BCF7]/10 rounded-lg">
              <img src="https://cdn.worldvectorlogo.com/logos/kubernets.svg" alt="Kubernetes" className="h-16 mb-4" />
              <span className="text-white font-medium">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-[#36BCF7]/10 rounded-lg">
              <img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="Firebase" className="h-16 mb-4" />
              <span className="text-white font-medium">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Skills;