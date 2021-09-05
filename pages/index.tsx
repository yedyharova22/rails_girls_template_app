import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { withLayout } from "@moxy/next-layout";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>EXPerience</main>
    </div>
  );
};

export default withLayout(<MainLayout />)(Home);
