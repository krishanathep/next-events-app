import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Showcase from '@/components/Showcase'

export default function Layout({ title, keyword, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>

      <Header />

      {router.pathname === '/' && <Showcase />}

      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other music events",
  keyword: "music, dj, edm, events",
};
