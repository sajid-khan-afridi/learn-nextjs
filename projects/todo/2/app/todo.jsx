"use client"

async function update(id, isDone) {
  await fetch(`http://localhost:3001/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
}
export default function Todo({todo}) {

  return (
    <div>
      <input type="checkbox" onChange={(e)=>{
        update(todo.id,e.target.checked)
      }}/>
      {todo.name}
      <button>Delete</button>
    </div>
  );
}
