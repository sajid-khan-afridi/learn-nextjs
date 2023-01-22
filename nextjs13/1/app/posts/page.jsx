import { use } from "react";

async function getPosts() {
  let posts = await fetch("https://dummyjson.com/posts?limit=3");
  return posts.json();
}

export default function Page() {
  let { posts } = use(getPosts());
  console.log(posts);
  return (
    <div>
      {posts.map((a) => (
        <li key={a.id}>{a.title}</li>
      ))}
    </div>
  );
}
