import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright Section */}
        <div className="text-slate-500 text-sm">
          © {currentYear} <span className="text-[#00ffff] font-medium">Hedi Rasuli</span>. All rights reserved.
        </div>

        {/* Social Links for Footer */}
        <div className="flex gap-6">
          <a href="https://github.com/hedirasuli" target="_blank" rel="noopener noreferrer" 
             className="text-slate-400 hover:text-[#00ffff] transition-all transform hover:scale-110">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/hedi-rasuli/" target="_blank" rel="noopener noreferrer" 
             className="text-slate-400 hover:text-[#00ffff] transition-all transform hover:scale-110">
            <FaLinkedin size={20} />
          </a>
          <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer" 
             className="text-slate-400 hover:text-[#00ffff] transition-all transform hover:scale-110">
            <FaTelegram size={20} />
          </a>
        </div>

        {/* Back to top (Optional) */}
        <div className="text-slate-500 text-sm hover:text-[#00ffff] cursor-pointer" 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top ↑
        </div>

      </div>
    </footer>
  );
};

export default Footer;