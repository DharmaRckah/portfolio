import React, { useState } from 'react';
import { MailIcon, LinkedinIcon, GithubIcon, SendIcon } from 'lucide-react';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Get in <span className="text-[#36BCF7]">Touch</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 md:p-8 border border-[#36BCF7]/30">
          <h2 className="text-2xl font-bold text-white mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[#36BCF7]/20 p-3 rounded-full mr-4">
                <MailIcon className="h-6 w-6 text-[#36BCF7]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <a href="mailto:dprajapati15302@gmail.com" className="text-gray-300 hover:text-[#36BCF7] transition-colors">
                  dprajapati15302@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#36BCF7]/20 p-3 rounded-full mr-4">
                <LinkedinIcon className="h-6 w-6 text-[#36BCF7]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  LinkedIn
                </h3>
                <a href="https://www.linkedin.com/in/dharmendra-prajapati-b4a825283/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#36BCF7] transition-colors">
                  Dharmendra Prajapati
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#36BCF7]/20 p-3 rounded-full mr-4">
                <GithubIcon className="h-6 w-6 text-[#36BCF7]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  GitHub
                </h3>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#36BCF7] transition-colors">
                  github.com/yourusername
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/dharmendra-prajapati-b4a825283/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0A66C2] text-white rounded-full hover:bg-[#0A66C2]/80 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#24292E] text-white rounded-full hover:bg-[#24292E]/80 transition-colors" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="mailto:dprajapati15302@gmail.com" className="p-3 bg-[#EA4335] text-white rounded-full hover:bg-[#EA4335]/80 transition-colors" aria-label="Email">
                <MailIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 md:p-8 border border-[#36BCF7]/30">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          {formStatus.submitted ? <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              {formStatus.message}
            </div> : <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#36BCF7] text-white" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#36BCF7] text-white" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#36BCF7] text-white resize-none" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-[#36BCF7] text-black font-medium rounded-md hover:bg-[#2da8e0] transition-colors flex items-center justify-center">
                <span>Send Message</span>
                <SendIcon size={18} className="ml-2" />
              </button>
            </form>}
        </div>
      </div>
    </div>;
};
export default Contact;