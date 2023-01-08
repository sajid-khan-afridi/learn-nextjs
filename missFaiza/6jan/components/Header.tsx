import Link from "next/link";
import React from "react";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <>
      {/* <nav style={{ backgroundColor: "red", color: "white" }}> */}
      <nav className={styles.header}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/contact">Contact Us</Link>
      </nav>
    </>
  );
}
