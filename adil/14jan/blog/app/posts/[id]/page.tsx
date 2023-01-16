import Link from "next/link";
import { use } from "react";

async function getPost(id: number) {
  let post = await fetch(`https://dummyjson.com/posts/${id}`);

  return post.json();
}

export default function generateStaticParams({
  params,
}: {
  params: { id: number };
}) {
  let id = params.id;
  let post = use(getPost(id));

  return (
    <div style={{ padding: "10px 30px 10px 30px" }}>
      <div>
        <h2 style={{ padding: "10px 30px 10px 30px" }}>{post.title}</h2>
        <p style={{ padding: "10px 30px 10px 30px" }}>{post.body}</p>
      </div>
      <div>
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
}
