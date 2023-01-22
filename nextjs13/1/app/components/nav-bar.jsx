import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={{ padding: "0px 10px" }}>
      <Link style={{ padding: "0px 5px" }} href="/">
        Home
      </Link>
      <Link style={{ padding: "0px 5px" }} href="/posts">
        Posts
      </Link>
    </nav>
  );
}
