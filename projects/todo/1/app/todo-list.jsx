const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();
  console.log(todos);
  // const listItem=products.map(prod=><li key={prod.id} style={{
  //   color: prod.isFruit ? 'magenta' : 'darkgreen'
  // }}>{prod.pname}</li>)
  // const listItem = todos.map((item) => (
  //   <li key={item.id} style={{ padding: "5px 0" }}>
  //     {item.name}
  //   </li>
  // ));
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => (
          <li key={t.id} style={{ padding: "5px 0" }}>
            <input type="checkbox" />
            {t.name}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
