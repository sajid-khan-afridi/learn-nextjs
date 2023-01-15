import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function NewPage() {
  return (
    <Layout>
      <Head>
        <title>new page</title>
      </Head>
      <Script></Script>
      <h1>Hello</h1>
      <Link href="/">back to home</Link>
      <Image src="/images/profile.jpg" width={100} height={100}></Image>
    </Layout>
  );
}
