import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Experience',
    path: '/experience'
  }, {
    name: 'Skills',
    path: '/skills'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const toggleMenu = () => setIsOpen(!isOpen);
  return <nav className="relative z-20 w-full bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              <span className="text-[#36BCF7]">D</span>harmendra
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map(item => <Link key={item.name} to={item.path} className={`${location.pathname === item.path ? 'bg-gray-800 text-[#36BCF7]' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                  {item.name}
                </Link>)}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`${location.pathname === item.path ? 'bg-gray-800 text-[#36BCF7]' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>)}
          </div>
        </div>}
    </nav>;
};
export default Navigation;