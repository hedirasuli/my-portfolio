import React from 'react';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-[#00ffff]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-[10px] uppercase tracking-wider bg-slate-700 px-2 py-1 rounded text-[#00ffff]">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-[#00ffff]">GitHub →</a>
                  
                  {/* Conditional Rendering: Only show Demo button if link is NOT "#" */}
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="bg-[#00ffff] text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-white transition-all">
                      Live Demo
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