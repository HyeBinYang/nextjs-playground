import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Robin from "public/Robin.jpg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>목록</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
      <Link href={"csr"}>
        <a>CSR</a>
      </Link>
      <br />
      <br />
      <Link href={"ssr"}>
        <a>SSR</a>
      </Link>
      <br />
      <br />
      <Link href={"ssg"}>
        <a>SSG</a>
      </Link>
      <br />
      <br />
      <Link href={"isr"}>
        <a>ISR</a>
      </Link>
      <Image src={Robin} alt="내 이미지" width={800} height={500} layout={"responsive"} />
    </div>
  );
};

export default Home;
