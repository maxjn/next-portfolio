import React from "react";
import Head from "next/head";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HomeSection from "@/components/HomeSection";
import Me from "@/components/Me";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maxjn</title>
        <meta name="description" content="Maxjn Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeSection />
        <Portfolio />
        <Experience />
        <Me />
        <Contact />
      </main>
    </>
  );
}
