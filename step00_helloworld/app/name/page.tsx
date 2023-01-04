"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div>name (Segment) page</div>
      <br></br>
      <button onClick={() => router.push("./name/address")}>
        Go to Leaf Segment Page
      </button>
    </>
  );
}
