import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects'; // 1. Import Projects component

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Projects /> {/* 2. Add Projects section here */}
      </main>
    </div>
  );
}

export default App;