import React, { useEffect, useRef } from 'react';
import Navigation from './Navigation';
import ThreeScene from './ThreeScene';
import SocialLinks from './SocialLinks';
const Layout: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Three.js canvas - always in background */}
      <div className="fixed inset-0 z-0">
        <ThreeScene containerRef={containerRef} />
      </div>
      {/* Main content container */}
      <div ref={containerRef} className="relative z-10 w-full min-h-screen">
        <Navigation />
        <main className="w-full min-h-[calc(100vh-64px)] p-4 md:p-8">
          {children}
        </main>
        <SocialLinks />
      </div>
    </div>;
};
export default Layout;