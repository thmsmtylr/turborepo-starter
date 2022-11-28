import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "ui";
import "ui/styles/tailwind.css";

const Docs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Turborepo Starter: Docs</title>
        <meta name="description" content="Turborepo Starter: Docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Turborepo Starter: Docs</h1>
        <Button label="button" onClick={() => console.log("click")} />
      </main>
    </>
  );
};

export default Docs;
