import React from 'react';
import Hero from './sections/Hero';

/**
 * Main Application Component
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* We can add a Navbar here later */}
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;