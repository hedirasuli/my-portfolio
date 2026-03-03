import React from 'react';

/**
 * App Component: The entry point of your professional portfolio.
 * We removed the default Vite template to start building from scratch.
 */
function App() {
  return (
    // 'bg-blue-600' should make the background blue. 
    // If it works, Tailwind is correctly installed.
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">
        Tailwind is Working! 🚀
      </h1>
    </div>
  );
}

export default App;