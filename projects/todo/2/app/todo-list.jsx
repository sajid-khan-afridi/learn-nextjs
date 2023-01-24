import Todo from "./todo";

async function getData() {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
}
export default async function TodoList() {
  let { todos } = await getData();
  // console.log(todos);
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {/* <li className="list">Todo 1</li>
        <li className="list">Todo 2</li>
        <li className="list">Todo 3</li> */}
        {todos.map((a) => (
          <li key={a.id} className="list">
            <Todo todo={a} />
          </li>
        ))}
      </ul>
    </div>
  );
}
