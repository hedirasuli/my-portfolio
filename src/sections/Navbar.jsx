import React, { useState } from 'react';

const Navbar = () => {
  /* English: State to manage the mobile menu toggle */
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md text-white py-4 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter cursor-pointer hover:text-[#00ffff] transition-colors">
          HR .
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#00ffff] transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div 
          className="md:hidden text-[#00ffff] cursor-pointer text-2xl" 
          onClick={toggleMenu}
        >
          {isOpen ? '✕' : 'Menu'}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* English: Added backticks to the className below to fix the syntax error */}
      <div className={`absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:hidden'}`}>
        <div className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg hover:text-[#00ffff] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;