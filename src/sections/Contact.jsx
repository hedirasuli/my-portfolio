import React from 'react';
import { FaEnvelope, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Let's <span className="text-[#00ffff]">Connect</span>
        </h2>
        <p className="text-slate-400 mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-slate-800 rounded-lg group-hover:bg-[#00ffff] group-hover:text-slate-900 transition-all">
                <FaEnvelope size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Me</p>
                <a href="mailto:hedi.rasuli@gmail.com" className="text-lg hover:text-[#00ffff]">hedi.rasuli21@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-slate-800 rounded-lg group-hover:bg-[#00ffff] group-hover:text-slate-900 transition-all">
                <FaLinkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">LinkedIn</p>
                <a href="https://www.linkedin.com/in/hedi-rasuli/" className="text-lg hover:text-[#00ffff]">Hedi Rasuli</a>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-4 bg-slate-800 rounded-lg border border-slate-700 focus:border-[#00ffff] outline-none transition-all"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-4 bg-slate-800 rounded-lg border border-slate-700 focus:border-[#00ffff] outline-none transition-all"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="p-4 bg-slate-800 rounded-lg border border-slate-700 focus:border-[#00ffff] outline-none transition-all"
            ></textarea>
            <button className="py-4 bg-[#00ffff] text-slate-900 font-bold rounded-lg hover:bg-[#00e6e6] transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;