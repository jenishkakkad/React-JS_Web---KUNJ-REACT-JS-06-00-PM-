import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Acc = () => {
  const [text, setText] = useState("Signup")

  const handleToggle = () => {
    setText(text === "Signup" ? "Login" : "Signup")
  }

  return (
    <div>
      <div>
        {text === "Signup" ? <Signup /> : <Login />}
      </div>
      <span onClick={handleToggle} style={{ cursor: 'pointer', color: 'blue' }}>
        {text === "Signup" ? "Already have an account? Login" : "Don't have an account? Signup"}
      </span>
    </div>
  )
}

export default Acc
