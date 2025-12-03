import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState("light");
  const headingRef = useRef(null);
  const audioRef = useRef(null);

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(savedTheme === "dark" ? "dark-mode" : "light-mode");
  }, []);

  // Apply theme on change
  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme === "dark" ? "dark-mode" : "light-mode");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Active animation/sound toggle
  useEffect(() => {
    

    if (isActive) {
      document.body.classList.add("active-background");

    

      if (audioRef.current) {
        console.log("Attempting to play audio:", audioRef.current);
        audioRef.current.volume = 1; // Ensure volume is set
        audioRef.current.play().catch(error => {
          console.log("Audio play failed:", error);
        });
      }
    } else {
      document.body.classList.remove("active-background");

     

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }

    return () => {
      document.body.classList.remove("active-background");
     
    };
  }, [isActive]);

  // Theme toggle handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="container">
      <h1 ref={headingRef}>React useEffect + Light/Dark + Sound</h1>

      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Remove Effects" : "Apply Effects"}
      </button>

      <button onClick={toggleTheme} style={{ marginLeft: "15px" }}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <audio ref={audioRef} src="click.mp3" preload="auto"></audio>
    </div>
  );
};

export default App;