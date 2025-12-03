import React, {useState} from "react";
import Header from "./header";

let Students = [10, 20, 30, 40, 50];
let St2 = [60, 70];
let box3 = [...Students, ...St2];
console.log(box3);

console.log(...Students, ...St2);

const data = [
  {
    name: "JK",
    gf: "JR",
  },
  {
    hobby: "Cricket",
    name: "Jk",
  },
  {
    name: "JK",
    hobby: "Football",
  },
];

console.log(data[0].name, data[1].hobby);
console.log(data);
console.log(...data);

export const App = () => {
  // let count = 0;
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
      {Students.forEach((i) => {
        console.log(i);
      })}

      {Students.forEach((e, i) => {
        console.log(i, e);
      })}

      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>


      <h1>{count}</h1>
    </>
  );
};

export default App;
