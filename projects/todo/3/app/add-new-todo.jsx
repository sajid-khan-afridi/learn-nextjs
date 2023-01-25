"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

async function add(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddNewTodo() {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={() => add(name, router.refresh)}> Add</button>
    </>
  );
}
