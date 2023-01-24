import { type NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import { api } from "../utils/api";

const Home: NextPage = () => {
  // const result = api.example.hello.useQuery({ text: "whaddup dog" });
  const result = api.resources.resourcesTable.useQuery();

  return (
    <>
      <Head>
        <title>WebGuide</title>
        <meta name="description" content="Best Web Dev Content" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <h1 className="text-white">{result.data?.message}</h1>
    </>
  );
};

export default Home;
