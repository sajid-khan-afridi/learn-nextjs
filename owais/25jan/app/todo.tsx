"use client";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    { totext: "todo 1", completed: true },
    { totext: "todo 2", completed: false },
    { totext: "todo 3", completed: true },
    { totext: "todo 4", completed: false },
  ]);
  const onClickHandler = (ele: any) => {
    // console.log(ele);
    const newtodos = todos.map((todo) => {
      if (todo.totext == ele.totext) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newtodos);
    // console.log(newtodos);
  };
  //for add and input
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    const newTodo = { totext: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  return (
    <div>
      <div>
        <input
          type={"text"}
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button onClick={addTodo}>add</button>
      </div>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((ele) => {
          return (
            <li
              style={{ color: ele.completed ? "green" : "blue" }}
              key={ele.totext}
            >
              <input
                type="checkbox"
                checked={ele.completed}
                onClick={() => onClickHandler(ele)}
              />
              {ele.totext}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
