import React, { useState } from 'react';
import { BriefcaseIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
const Experience: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    agnito: false,
    manasvi: false,
    sca: false,
    ngo: false
  });
  const toggleRole = (role: string) => {
    setExpandedRoles(prev => ({
      ...prev,
      [role]: !prev[role]
    }));
  };
  return <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Professional <span className="text-[#36BCF7]">Experience</span>
        </h1>
        <div className="space-y-12">
          {/* Agnito Technologies */}
          <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 md:p-8 border-l-4 border-[#36BCF7]">
            <div className="flex items-start">
              <div className="bg-[#36BCF7]/20 p-3 rounded-full mr-4">
                <BriefcaseIcon className="h-6 w-6 text-[#36BCF7]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    FULL STACK MERN DEVELOPER
                  </h2>
                  <span className="text-[#36BCF7] text-sm md:text-base">
                    Jan 2025 - Present
                  </span>
                </div>
                <h3 className="text-lg text-gray-300 mb-4">
                  Agnito Technologies Pvt. Ltd.
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    🚀 Designed and implemented user-friendly web applications
                    using the MERN stack.
                  </p>
                  <p>
                    🚀 Collaborated with UI/UX designers to enhance application
                    aesthetics and user experience.
                  </p>
                  <p>
                    🚀 Integrated RESTful APIs and third-party services to
                    improve application functionality.
                  </p>
                  <p>
                    🚀 Conducted code reviews and provided constructive feedback
                    to ensure best practices.
                  </p>
                </div>
                <button className="mt-4 flex items-center text-[#36BCF7] hover:text-[#2da8e0] transition-colors" onClick={() => toggleRole('agnito')}>
                  <span className="mr-1">
                    📌 Expanded Role: Senior Developer
                  </span>
                  {expandedRoles.agnito ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                </button>
                {expandedRoles.agnito && <div className="mt-4 pl-4 border-l-2 border-[#36BCF7]/30 text-gray-300 space-y-3">
                    <p>
                      Led a team of developers in agile project management,
                      ensuring timely delivery of features.
                    </p>
                    <p>
                      Developed and maintained documentation for code and
                      application architecture.
                    </p>
                    <p>
                      Engaged in continuous learning and implementation of new
                      technologies to keep the team updated.
                    </p>
                  </div>}
              </div>
            </div>
          </div>
          {/* Manasvi Technologies */}
          <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 md:p-8 border-l-4 border-[#36BCF7]">
            <div className="flex items-start">
              <div className="bg-[#36BCF7]/20 p-3 rounded-full mr-4">
                <BriefcaseIcon className="h-6 w-6 text-[#36BCF7]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    MERN STACK DEVELOPER
                  </h2>
                  <span className="text-[#36BCF7] text-sm md:text-base">
                    June 2023 - Present
                  </span>
                </div>
                <h3 className="text-lg text-gray-300 mb-4">
                  Manasvi Technologies OPC Pvt. Ltd., Bhopal, India
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    🚀 Developed and deployed scalable web applications,
                    ensuring high performance and reliability.
                  </p>
                  <p>
                    🚀 Led MERN stack projects, managing full-cycle development
                    from planning to deployment.
                  </p>
                  <p>
                    🚀 Administered databases and managed Virtual Private
                    Servers (VPS) for secure and efficient hosting solutions.
                  </p>
                  <p>
                    🚀 Collaborated with cross-functional teams to deliver
                    innovative tech solutions on time.
                  </p>
                </div>
                <button className="mt-4 flex items-center text-[#36BCF7] hover:text-[#2da8e0] transition-colors" onClick={() => toggleRole('manasvi')}>
                  <span className="mr-1">📌 Expanded Role: Team Lead</span>
                  {expandedRoles.manasvi ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                </button>
                {expandedRoles.manasvi && <div className="mt-4 pl-4 border-l-2 border-[#36BCF7]/30 text-gray-300 space-y-3">
                    <p>
                      Mentored and guided a team of junior developers in
                      technical and project management aspects.
                    </p>
                    <p>
                      Streamlined project workflows, ensuring timely and
                      efficient delivery.
                    </p>
                    <p>
                      Played a pivotal role in design reviews, ensuring high
                      code quality and adherence to industry standards.
                    </p>
                    <p>
                      Spearheaded efforts to modernize existing applications,
                      incorporating cutting-edge technologies.
                    </p>
                  </div>}
              </div>
            </div>
          </div>
          {/* Internships Section */}
          <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
              Internships & <span className="text-[#36BCF7]">Training</span>
            </h2>
            <div className="space-y-8">
              {/* SCA Internship */}
              <div className="border-l-4 border-[#36BCF7]/70 pl-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Web Development Internship
                  </h3>
                  <span className="text-[#36BCF7] text-sm">
                    Jan - March 2023
                  </span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">SCA</h4>
                <button className="flex items-center text-[#36BCF7] hover:text-[#2da8e0] transition-colors" onClick={() => toggleRole('sca')}>
                  <span className="mr-1">View Details</span>
                  {expandedRoles.sca ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                </button>
                {expandedRoles.sca && <div className="mt-3 text-gray-300 space-y-2">
                    <p>
                      Designed and implemented responsive web applications using
                      modern frameworks and tools.
                    </p>
                    <p>
                      Collaborated in a team environment to deliver project
                      milestones successfully.
                    </p>
                  </div>}
              </div>
              {/* NGO Internship */}
              <div className="border-l-4 border-[#36BCF7]/70 pl-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Social Entrepreneurship Internship
                  </h3>
                  <span className="text-[#36BCF7] text-sm">Dec 2022</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">
                  Hamari Pehchan NGO
                </h4>
                <button className="flex items-center text-[#36BCF7] hover:text-[#2da8e0] transition-colors" onClick={() => toggleRole('ngo')}>
                  <span className="mr-1">View Details</span>
                  {expandedRoles.ngo ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                </button>
                {expandedRoles.ngo && <div className="mt-3 text-gray-300 space-y-2">
                    <p>
                      Assisted in developing social entrepreneurship initiatives
                      to support underprivileged communities.
                    </p>
                    <p>
                      Created digital assets and participated in outreach
                      campaigns.
                    </p>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Experience;