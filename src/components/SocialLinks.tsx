import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, FileTextIcon } from 'lucide-react';
const SocialLinks: React.FC = () => {
  return <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex items-center space-x-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
          <GithubIcon size={20} />
        </a>
        <a href="https://www.linkedin.com/in/dharmendra-prajapati-b4a825283/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
          <LinkedinIcon size={20} />
        </a>
        <a href="mailto:dprajapati15302@gmail.com" className="text-gray-400 hover:text-[#EA4335] transition-colors" aria-label="Email">
          <MailIcon size={20} />
        </a>
        <a href="#resume" className="text-gray-400 hover:text-[#36BCF7] transition-colors" aria-label="Resume">
          <FileTextIcon size={20} />
        </a>
      </div>
    </div>;
};
export default SocialLinks;