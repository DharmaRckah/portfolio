import React from 'react';
const About: React.FC = () => {
  return <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-md rounded-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          About <span className="text-[#36BCF7]">Me</span>
        </h1>
        <div className="mb-8">
          <div className="bg-gradient-to-r from-[#36BCF7]/20 to-transparent p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#36BCF7]">
              Who I Am
            </h2>
            <p className="text-gray-300 mb-4">
              Welcome to my portfolio! I'm a passionate{' '}
              <strong>Full Stack MERN Developer</strong> with expertise in
              building user-friendly, scalable, and high-performance web
              applications.
            </p>
            <p className="text-gray-300">
              With a strong foundation in both front-end and back-end
              technologies, I create seamless, end-to-end solutions that deliver
              exceptional user experiences while maintaining robust
              functionality and performance.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#36BCF7]/20 to-transparent p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#36BCF7]">
              My Approach
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">🔍 Problem Solver:</strong> I
                approach each project as a unique challenge, analyzing
                requirements thoroughly to deliver tailored solutions.
              </p>
              <p>
                <strong className="text-white">🚀 Performance Focused:</strong>{' '}
                I prioritize creating applications that are not only functional
                but also optimized for speed and efficiency.
              </p>
              <p>
                <strong className="text-white">📱 Responsive Design:</strong> I
                ensure all my applications provide seamless experiences across
                all devices and screen sizes.
              </p>
              <p>
                <strong className="text-white">🔄 Continuous Learner:</strong> I
                stay updated with the latest trends and technologies in web
                development to implement cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#36BCF7]">
            Education
          </h2>
          <div className="inline-block bg-black/70 px-8 py-4 rounded-lg">
            <p className="text-xl font-medium text-white">
              Bachelor of Technology
            </p>
            <p className="text-gray-400">Computer Science & Engineering</p>
            <p className="text-gray-500 mt-2">2019 - 2023</p>
          </div>
        </div>
      </div>
    </div>;
};
export default About;