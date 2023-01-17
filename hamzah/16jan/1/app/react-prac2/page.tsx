"use client";
import { useState } from "react";

export default function ReactComponents() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="container1">
        <button onClick={increment}>++</button>
        <h1>{count}</h1>
        <button onClick={decrement}>--</button>
      </div>

      <div className="container2">
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
      </div>
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
