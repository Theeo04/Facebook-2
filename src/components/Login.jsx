import { signIn } from "next-auth/react";
import React from "react";
import Image from "next/image"; // Adăugați această linie

function Login() {
  return (
    <div className="pt-30 flex flex-col items-center">
      <Image
        src="https://create-react-app.dev/img/logo.svg"
        height={300}
        width={300}
        objectFit="contain"
        alt="logo"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-green-700 rounded-full text-white text-center w-50 h-50 cursor-pointer"
      >
        Login with Google
      </h1>
    </div>
  );
}

export default Login;
