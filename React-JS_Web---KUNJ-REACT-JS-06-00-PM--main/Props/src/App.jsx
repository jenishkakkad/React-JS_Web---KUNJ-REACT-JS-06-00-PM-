import React, {useState} from "react";
import Stu1 from "./Stu1";

const App = () => {
  let [count, setCount] = useState(0);
    const inc = () => {
      console.log("Button clicked!");
      // count++;
      setCount(count + 1);
      console.log(count);
    };
  
    const dec = () => {
       console.log("Button clicked!");
      if (count > 0) {
        setCount(count - 1);
        console.log(count - 1);
      } else {
        alert("Cannot decrement below 0");
      }
    };
  return (
    <>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <Stu1 data={count}/>
    </>
  )
}

export default App
