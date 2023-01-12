import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/address">Address</Link>
      <Link href="/designation">Designation</Link>
    </>
  );
}
