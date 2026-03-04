import React from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5, 
  SiPython, 
  SiGithub, 
  SiVite,
  SiDatabricks
} from 'react-icons/si';

// Define the data here so the code below can see it
const skillsData = [
  { id: 1, name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { id: 2, name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { id: 4, name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { id: 5, name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { id: 6, name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
  { id: 7, name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
  { id: 8, name: "Databases (SQL)", icon: <SiDatabricks className="text-[#FF3621]" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800 text-white px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical <span className="text-[#00ffff]">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill) => (
            <div key={skill.id} className="p-6 bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center hover:border-[#00ffff] transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;