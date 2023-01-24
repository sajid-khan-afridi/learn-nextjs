"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  const [name, setName] = useState("");
  return (
    <div className="addtodo">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
}
