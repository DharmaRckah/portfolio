import React from 'react';
const Loading: React.FC = () => {
  return <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-block w-16 h-16 border-4 border-t-[#36BCF7] border-r-transparent border-b-[#36BCF7] border-l-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-bold text-white">
          Loading<span className="animate-pulse">...</span>
        </h2>
        <p className="text-gray-400 mt-2">Preparing an immersive experience</p>
      </div>
    </div>;
};
export default Loading;