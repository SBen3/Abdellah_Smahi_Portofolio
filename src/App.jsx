import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Loading from "./components/loading.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import './App.css'

function App() {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="relative bg-black text-white min-h-screen w-full scrollPage">
      {isLoading ? (
        <Loading
          stopLoading={() => {
            setLoading(false); 
          }}
        />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects/>
          <Contact/>
        </>
      )}
      </div>
  );
}

export default App;
