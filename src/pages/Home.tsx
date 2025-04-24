import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
const Home: React.FC = () => {
  const nameContainerRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (nameContainerRef.current) {
      const text = nameContainerRef.current.querySelector('span');
      if (text) {
        text.classList.add('animate-pulse');
      }
    }
  }, []);
  return <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="max-w-4xl w-full text-center p-6 bg-black/50 backdrop-blur-md rounded-lg">
        <h1 ref={nameContainerRef} className="text-3xl md:text-5xl font-bold text-white mb-6">
          👋 Hey there, I'm
          <span className="block text-[#36BCF7] mt-4">
            Dharmendra Prajapati
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-8">
          Full Stack MERN Developer
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          I build scalable, high-performance web applications with modern
          technologies. Passionate about creating exceptional user experiences
          and solving complex problems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/about" className="px-6 py-3 bg-[#36BCF7] text-black font-medium rounded-md hover:bg-[#2da8e0] transition-colors">
            About Me
          </Link>
          <Link to="/projects" className="px-6 py-3 bg-transparent border border-[#36BCF7] text-[#36BCF7] font-medium rounded-md hover:bg-[#36BCF7]/10 transition-colors">
            View My Work
          </Link>
        </div>
      </div>
    </div>;
};
export default Home;