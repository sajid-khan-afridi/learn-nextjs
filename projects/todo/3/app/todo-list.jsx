import Todo from "./todo";

async function getData(){
  let todos=await fetch(`http://localhost:3001/api/todo/list`)
  return todos.json();
}

export default async function TodoList() {
let {todos}=await getData();

  return (
    <ul style={{listStyleType:"none"}}>

      {todos.map((a)=>(
        <li key={a.id}><Todo todo={a}/></li>
        
      ))}

    </ul>
    )


}
