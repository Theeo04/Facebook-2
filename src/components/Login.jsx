import React from "react";
import { signIn } from "next-auth/react";

function Login() {
  return <button onClick={() => signIn()}>Log In</button>;
}

export default Login;
