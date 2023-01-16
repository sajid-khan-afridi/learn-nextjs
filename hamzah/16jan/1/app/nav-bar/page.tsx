import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Link href="/" className="link">
        Home
      </Link>
      <Link href="/about" className="link">
        About
      </Link>
      <Link href="/contact" className="link">
        Contact
      </Link>
    </>
  );
}
