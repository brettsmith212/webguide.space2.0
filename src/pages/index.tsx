import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Hero from "../components/Hero";
import { api } from "../utils/api";
import { supabase } from "../utils/supabaseClient";

const Home: NextPage = () => {
  // const result = api.example.hello.useQuery({ text: "whaddup dog" });

  const getResourceTable = async () => {
    const { data, error } = await supabase.from("resources").select("*");
    if (error) {
      console.log("ERROR", error);
    } else if (data) {
      console.log(data);
    }
  };

  return (
    <>
      <Head>
        <title>WebGuide</title>
        <meta name="description" content="Best Web Dev Content" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      {/* <h1 className="text-white">{result.data?.greeting}</h1> */}
      <button
        className="ml-10 transform rounded-lg bg-cyan-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-opacity-80"
        onClick={getResourceTable}
      >
        SUPABASE!
      </button>
    </>
  );
};

export default Home;
