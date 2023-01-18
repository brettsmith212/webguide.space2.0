import { type NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WebGuide</title>
        <meta name="description" content="Best Web Dev Content" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
    </>
  );
};

export default Home;
