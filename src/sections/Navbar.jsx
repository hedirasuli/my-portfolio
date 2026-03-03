import React from 'react';

/**
 * Navbar Component
 * Features: Sticky positioning, Glassmorphism effect, and Smooth links
 */
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md text-white py-4 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-xl font-bold tracking-tighter cursor-pointer hover:text-[#00ffff] transition-colors">
          HR <span className="text-[#00ffff]">.</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="hover:text-[#00ffff] transition-colors">Home</a>
          <a href="#projects" className="hover:text-[#00ffff] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#00ffff] transition-colors">Skills</a>
          <a href="#contact" className="hover:text-[#00ffff] transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Icon (Placeholder for now) */}
        <div className="md:hidden text-[#00ffff]">
          Menu
        </div>
      </div>
    </nav>
  );
};

export default Navbar;