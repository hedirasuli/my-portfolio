/* English: Database with specific file names from the assets folder.
   Ordering: HTML/CSS -> JavaScript -> Python.
*/
import calculatorImg from '../assets/calculator-app.png';
import weatherImg from '../assets/weather-dashboard.png';
import currencyImg from '../assets/currency-converter.png';
import musicImg from '../assets/music-shop.png';
import orbitImg from '../assets/moon-orbit.png';
import skylineImg from '../assets/city-skyline.png';
import sortingImg from '../assets/sorting-visualizer.png';

// New Python Images with exact names from your screenshot:
import pathfinderImg from '../assets/pathfinder-algorithm.png';
import budgetImg from '../assets/home-budget-manager-screenshot.avif';

export const projectsData = [
  // --- Group 1: HTML & CSS ---
  {
    id: 1,
    title: "Moon Orbit",
    description: "A CSS-only animation project showcasing advanced keyframes and celestial body motion.",
    image: orbitImg,
    github: "https://github.com/hedirasuli/my-fcc-projects/tree/12349c51a405470cc2708b795f9c3696869f3c66/style.css/Build%20a%20Moon%20Orbit",
    demo: "https://my-fcc-projects-pi.vercel.app",
    tags: ["HTML5", "CSS3", "Animation"]
  },
  {
    id: 2,
    title: "City Skyline",
    description: "A sophisticated layout project using CSS Grid and Flexbox to create a detailed urban landscape.",
    image: skylineImg,
    github: "https://github.com/hedirasuli/my-fcc-projects/tree/12349c51a405470cc2708b795f9c3696869f3c66/style.css/City%20Skyline",
    demo: "https://my-fcc-projects-02.vercel.app",
    tags: ["HTML5", "CSS Grid", "Flexbox"]
  },

  // --- Group 2: JavaScript / HTML / CSS ---
  {
    id: 3,
    title: "Logic Calculator",
    description: "A fully functional calculator with a clean UI, handling complex mathematical operations and logic.",
    image: calculatorImg,
    github: "https://github.com/hedirasuli/my-fcc-projects/tree/12349c51a405470cc2708b795f9c3696869f3c66/script.js/Bulid%20a%20Calculator.js",
    demo: "https://my-fcc-projects-03.vercel.app "
   ,
    tags: ["JavaScript", "HTML5", "CSS3"]
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A dynamic web application providing weather updates using OpenWeather API integration and vanilla JavaScript.",
    image: weatherImg,
    github: "https://github.com/hedirasuli/my-fcc-projects/tree/12349c51a405470cc2708b795f9c3696869f3c66/script.js/Build%20a%20Weather%20App.js",
    demo: "https://my-fcc-projects-04.vercel.app",
    tags: ["JavaScript", "API Integration", "HTML/CSS"]
  },
  {
    id: 5,
    title: "Currency Converter",
    description: "A financial tool that calculates exchange rates using external API integration and JavaScript logic.",
    image: currencyImg,
    github: "https://github.com/hedirasuli/my-fcc-projects/tree/12349c51a405470cc2708b795f9c3696869f3c66/react-practice/Currency%20Converter.jsx",
    demo: "https://my-fcc-projects-05.vercel.app",
    tags: ["JavaScript", "API Fetch", "HTML/CSS"]
  },
  {
    id: 6,
    title: "Music Shop Card",
    description: "An interactive e-commerce component featuring digital music assets with responsive design.",
    image: musicImg,
    github: "https://github.com/hedirasuli/my-fcc-projects/tree/12349c51a405470cc2708b795f9c3696869f3c66/react-practice/MusicShoppingCart.jsx",
    demo: "https://google.com",
    tags: ["JavaScript", "HTML5", "CSS3"]
  },
  {
    id: 7,
    title: "Sorting Visualizer",
    description: "An educational tool that visualizes classic sorting algorithms like Bubble and Quick Sort.",
    image: sortingImg,
    github: "https://github.com/hedirasuli/my-fcc-projects/tree/12349c51a405470cc2708b795f9c3696869f3c66/script.js/Build%20a%20Sorting%20Visualizer.js",
    demo: "https://google.com",
    tags: ["JavaScript", "Algorithms", "Canvas"]
  },

  // --- Group 3: Python Projects ---
  {
    id: 8,
    title: "Budget Manager",
    description: "A Python-based financial tracker designed to manage personal expenses and organize budget data.",
    image: budgetImg, 
    github: "https://github.com/hedirasuli/my-fcc-projects/tree/12349c51a405470cc2708b795f9c3696869f3c66/python.py/build_a_budget_app",
    demo: "#",
    tags: ["Python", "Data Management", "Logic"]
  },
  {
    id: 9,
    title: "Pathfinder Algorithm",
    description: "Implementation of Dijkstra's algorithm to find the shortest path between nodes in a graph structure.",
    image: pathfinderImg,
    github: "https://github.com/hedirasuli/my-fcc-projects/tree/12349c51a405470cc2708b795f9c3696869f3c66/python.py/implement_the_shortest_path_algorithm",
    demo: "#",
    tags: ["Python", "Algorithms", "Back-end"]
  }
];