import Head from "next/head";
import Header from "@/components/Header";

import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import { getSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  if (!session) {
    return <Login />;
  }

  if (session) {
    return (
      <div>
        <Head>
          <title>Facebook</title>
        </Head>
        <Header />
        <main className="flex">
          <Sidebar className="flex" />
          <Feed />
          {/* {Widgets} */}
        </main>
      </div>
    );
  }
}
