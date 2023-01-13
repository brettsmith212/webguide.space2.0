import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>WebGuide</title>
        <meta name="description" content="Best Web Dev Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-4 flex justify-center">
        <h1 className="text-blue-500">Welcome to Webguide</h1>
      </main>
    </>
  );
};

export default Home;
