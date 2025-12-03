// App.js
import React, { useState, useEffect } from "react";
import "./App.css"; // external CSS file

const App = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("active-background");
    } else {
      document.body.classList.remove("active-background");
    }

    // Cleanup (optional but recommended)
    return () => {
      document.body.classList.remove("active-background");
    };
  }, [isActive]);

  return (
    <div className="container">
      <h1>useEffect CSS Example</h1>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default App;
