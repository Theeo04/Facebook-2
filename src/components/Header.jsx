import React from "react";
import Image from "next/image";
import HeaderIcon from "./Headericon";
import {
  BiSearch,
  BiHome,
  BiFlag,
  BiPlayCircle,
  BiShoppingBag,
  BiGroup,
  BiGridAlt,
  BiChat,
  BiChevronDown,
  BiBell,
} from "react-icons/bi";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* {Left} */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <BiSearch className="h-6" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none"
            type="text"
            placeholder="Search Now"
          />
        </div>
      </div>

      {/* {Center} */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderIcon Icon={BiHome} />
          <HeaderIcon Icon={BiFlag} />
          <HeaderIcon Icon={BiPlayCircle} />
          <HeaderIcon Icon={BiShoppingBag} />
          <HeaderIcon Icon={BiGroup} />
        </div>
      </div>

      {/* {Right} */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* {Profile Picture} */}
        <p className="whitespace-nowrap font-semibold pr-3">Theo Dev</p>
        <BiGridAlt className="icon" />
        <BiChat className="icon" />
        <BiBell className="icon" />
        <BiChevronDown className="icon" />
      </div>
    </div>
  );
}

export default Header;
