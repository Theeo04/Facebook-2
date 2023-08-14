import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { BiHappyBeaming, BiCamera, BiVideo } from "react-icons/bi";
import SidebarRow from "./SidebarRow";

function InputBox() {
  const { data: session } = useSession();

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-grey-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-grey flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What is on Your Mind, ${session.user.name}?`}
          ></input>
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-1">
        <div className="inputIcon">
          <BiVideo className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <BiHappyBeaming className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling activity</p>
        </div>
        <div className="inputIcon">
          <BiCamera className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
