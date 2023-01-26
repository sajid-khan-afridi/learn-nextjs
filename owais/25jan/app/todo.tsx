"use client";
import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState([
    { totext: "todo 1", isDone: false },
    { totext: "todo 2", isDone: false },
  ]);
  return (
    <div>
      <ul>
        {todo.map((ele) => {
          return <li key={ele.totext}>{ele.totext}</li>;
        })}
      </ul>
    </div>
  );
}
