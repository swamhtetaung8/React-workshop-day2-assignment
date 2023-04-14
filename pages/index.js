import Form from "@/components/Form";
import List from "@/components/List";
import Search from "@/components/Search";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Todo Next</title>
      </Head>
      <main className="text-gray-100 lg:px-10 px-5 py-5 max-w-7xl mx-auto mt-10">
        <h1 className="text-2xl font-medium ">Todo List with NextJs</h1>
        <div className="flex justify-between flex-col items-start lg:flex-row gap-5 lg:items-center my-10">
          <Form />
          <Search />
        </div>
        <List />
      </main>
    </>
  );
};

export default Home;
