import React from 'react';
import profileImg from '../assets/profile.jpg'; // Import the image
/**
 * Hero Section Component
 * Displaying professional introduction and profile picture
 */


const Hero = () => {
    return (
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white text-gray-800">
        {/* Introduction Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-blue-600">
            Hi, I'm Hedi Rasuli
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            A passionate developer based in Germany, focusing on building modern web applications. 
            I specialize in React and clean UI designs.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              LinkedIn
            </a>
            <a href="#" className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
              GitHub
            </a>
          </div>
        </div>
  
       
        {/* Profile Image Space */}
<div className="md:w-1/3 mt-12 md:mt-0 flex justify-center">
  <div className="w-64 h-64 bg-gray-200 rounded-full border-4 border-blue-100 flex items-center justify-center overflow-hidden shadow-2xl">
    <img 
      src={profileImg} 
      alt="My Profile" 
      className="w-full h-full object-cover rounded-full" 
    />
  </div>
</div>
      </section>
    );
  };
  
  export default Hero;