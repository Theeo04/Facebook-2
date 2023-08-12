// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// const options = {
//   // Configure one or more authentication providers
//   providers: [
//     Providers.Facebook({
//       clientId: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//     }),
//     // ...add more providers here
//   ],
// };

// export default NextAuth(options);

import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const options = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

const authHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
