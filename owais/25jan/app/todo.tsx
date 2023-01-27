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
    setTodo(""); //to empty the text box
  };
  //for delete todo
  const deleteTodo = (elem: any) => {
    const newTodos = todos.filter((todo) => {
      console.log(elem);
      if (todo.totext == elem.totext) return false;
      return true;
    });
    setTodos(newTodos);
    console.log("old todos", todos, "newtodos", newTodos);
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
                onChange={() => onClickHandler(ele)}
              />
              {ele.totext}
              <button onClick={() => deleteTodo(ele)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
