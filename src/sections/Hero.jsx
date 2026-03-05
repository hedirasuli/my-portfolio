import React from 'react';
import profileImg from '../assets/profile.jpg'; // Ensure the path is correct

/**
 * Custom Hero Section
 * Features: Cyan background, centered text, split bottom layout
 */
const Hero = () => {
  return (
    <section className="min-h-[80vh] pt-32 bg-[#00ffff] flex flex-col items-center justify-between p-8 md:p-16">
      
      {/* Top Section: Centered Typography with High Contrast */}
      <div className="w-full text-center mt-10">
        <h1 className="text-6xl font-black text-slate-900 mb-4 drop-shadow-sm">
          Hi, I'm Hedi
        </h1>
        <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-3xl mx-auto">
        A Frontend Developer dedicated to building high-performance web applications with React and crafting seamless user experiences.
        </p>
      </div>

      {/* Bottom Section: Buttons Left, Large Image Right */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0">
        
        {/* Buttons Group - Left Side */}
        <div className="flex flex-row space-x-6 mb-12 md:mb-0">
          <a 
            href="https://www.linkedin.com/in/hedi-rasuli/" 
            className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-700 hover:scale-105 transition-all shadow-lg"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/hedirasuli" 
            className="border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-900 hover:text-[#00ffff] hover:scale-105 transition-all"
          >
            GitHub
          </a>
        </div>

        {/* Larger Profile Image - Right Side */}
        <div className="relative group">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-8 border-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:rotate-3">
            <img 
              src={profileImg} 
              alt="Hedi Rasuli Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          {/* Decorative element behind image */}
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-slate-900 rounded-full -z-10 opacity-10 group-hover:opacity-20 transition-opacity"></div>
        </div>

      </div>

    </section>
  );
};

export default Hero;