import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "ui";
import "ui/styles/tailwind.css";

const Web: NextPage = () => {
  return (
    <>
      <Head>
        <title>Turborepo Starter: Web</title>
        <meta name="description" content="Turborepo Starter: Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Turborepo Starter: Web</h1>
        <Button label="button" onClick={() => console.log("click")} />
      </main>
    </>
  );
};

export default Web;
