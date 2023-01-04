"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div>name (Leaf Segment) page</div>
      <br></br>
      <button onClick={() => router.push("./")}>Go back to Home page</button>
    </>
  );
}
