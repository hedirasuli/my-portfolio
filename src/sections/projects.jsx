import React from 'react';
/* English: Import the database from your data file */
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-[#00ffff]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* --- Corrected Tags Section --- */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags && project.tags.map((tag, index) => (
                    <span key={index} className="text-[10px] uppercase tracking-wider text-[#00ffff] bg-[#00ffff]/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* --- Buttons Section --- */}
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#00ffff] text-slate-900 px-4 py-2 rounded-full font-bold hover:bg-white transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center border border-[#00ffff] text-[#00ffff] px-4 py-2 rounded-full font-bold hover:bg-[#00ffff] hover:text-slate-900 transition-colors text-sm"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;