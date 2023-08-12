import "@/styles/globals.css";
// import { Provider as AuthProvider } from "next-auth/react";

// // function App({ Component, pageProps }) {
// //   return (
// //     <AuthProvider session={pageProps.session}>
// //       <Component {...pageProps} />
// //     </AuthProvider>
// //   );
// // }

// // export default App;

import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
