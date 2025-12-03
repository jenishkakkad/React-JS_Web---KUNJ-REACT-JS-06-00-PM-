import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Acc = () => {
  const [text, setText] = useState("Signup");

  const handleToggle = () => {
    setText(text === "Signup" ? "Login" : "Signup");
  };

  return (
    <div className="acc-container">
      <div>
        {text === "Signup" ? <Signup /> : <Login />}
      </div>
      <button onClick={handleToggle} className="toggle-button">
        {text === "Signup" ? "Already have an account? Login" : "Don't have an account? Signup"}
      </button>
    </div>
  );
};

export default Acc;
