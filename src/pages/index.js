import Head from "next/head";
import Header from "@/components/Header";

import { useSession } from "next-auth/react";
import Login from "@/components/Login";

export default function Home() {
  // const { data: session, status } = useSession();
  // if (status != "authenticated") {
  //   return <Login />;
  // }
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main>
        {/* {Sidebar} */}
        {/* {Feed} */}
        {/* {Widgets} */}
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   // Get the user session
//   const session = await getSession(context);

//   return {
//     props: {
//       session,
//     },
//   };
// }
