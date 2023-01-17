const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ padding: "5px 0" }}>todo 1</li>
        <li style={{ padding: "5px 0" }}>todo 2</li>
        <li style={{ padding: "5px 0" }}>todo 3</li>
      </ul>
    </div>
  );
}
