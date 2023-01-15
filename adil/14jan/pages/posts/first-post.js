import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <h1> first post </h1>
      <Head>
        <title>First Post</title>
      </Head>
      <Link href="/">Go Back</Link>
    </>
  );
}
