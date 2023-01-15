import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WebGuide</title>
        <meta name="description" content="Best Web Dev Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-4 flex justify-center">
        <h1 className="font-sans text-cyan-500">Welcome to Webguide</h1>
      </main>
    </>
  );
};

export default Home;
