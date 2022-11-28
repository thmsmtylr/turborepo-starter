import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "ui";
import "ui/styles/tailwind.css";

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Turborepo Starter: Admin</title>
        <meta name="description" content="Turborepo Starter: Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Turborepo Starter: Admin</h1>
        <Button label="button" onClick={() => console.log("click")} />
      </main>
    </>
  );
};

export default Admin;
