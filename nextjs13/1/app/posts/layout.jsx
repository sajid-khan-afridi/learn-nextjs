import Link from "next/link";
import { use } from "react";

async function getPosts() {
  let posts = await fetch("https://dummyjson.com/posts?limit=3");
  return posts.json();
}

export default function Layout({ children }) {
  let { posts } = use(getPosts());
  console.log(posts);
  return (
    // <div className="container ">
    <div style={{ margin: "30px 40px" }}>
      <ul>
        {posts.map((a) => (
          <li key={a.id}>
            <Link href={`/posts/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
}
