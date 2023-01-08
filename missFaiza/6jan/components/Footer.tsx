import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <nav className="mt-5">
        <Link
          className="bg-blue-500 mr-5 text-white font-bold py-2 px-4 rounded"
          href="/"
        >
          Home
        </Link>
        <Link
          className="bg-blue-500 mr-5 text-white font-bold py-2 px-4 rounded"
          href="/about"
        >
          About
        </Link>
        <Link
          className="bg-blue-500 mr-5 text-white font-bold py-2 px-4 rounded"
          href="/about/contact"
        >
          Contact Us
        </Link>
      </nav>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        hello
      </button> */}
    </>
  );
}
