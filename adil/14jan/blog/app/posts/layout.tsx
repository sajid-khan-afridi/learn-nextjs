import { use } from "react";
import Link from "next/link";

async function getPost() {
  let posts = await fetch("https://dummyjson.com/posts?limit=5");

  return posts.json();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  let { posts } = use(getPost());
  return (
    <>
      <ul>
        {posts.map((p: { id: number; title: string }) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>

      <div style={{ background: "yellow" }}>{children}</div>
    </>
  );
}
