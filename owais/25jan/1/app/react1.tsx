"use client";
import { useState } from "react";

export default function React1() {
  const [num, setNum]: any = useState(0);
  // function fun(counter: number) {
  //   setNum(num + counter);
  // }

  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1);
  return (
    <div>
      {/* 
      
      <button onClick={() => setNum(num - 1)}>decrease by 1</button>
      {num}
      <button onClick={() => setNum(num + 1)}>increse by 1</button> */}

      {/* <button onClick={() => fun(-3)}>decrement by 3</button>
      <button onClick={() => fun(-2)}>decrement by 2</button>
      <button onClick={() => fun(-1)}>decrement by 1</button>
      {num}
      <button onClick={() => fun(1)}>increment by 1</button>
      <button onClick={() => fun(2)}>increment by 2</button>
      <button onClick={() => fun(3)}>increment by 3</button> */}

      <button onClick={decrement}>decrement by 1</button>
      {num}
      <button onClick={increment}>increment by 1</button>
    </div>
  );
}
