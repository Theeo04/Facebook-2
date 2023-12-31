import React from "react";
import { BiSearch, BiCamera, BiDotsHorizontal } from "react-icons/bi";
import Contact from "./Contact";

const contracts = [
  {
    src: "https://i.insider.com/62867dbc577b8a0018279fc5?width=700",
    name: "Jeff Bezos",
  },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
  { src: "https://links.papareact.com/6gg", name: "The Queen" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Friends</h2>
        <div className="flex space-x-2">
          <BiCamera className="h-6" />
          <BiSearch className="h-6" />
          <BiDotsHorizontal className="h-6" />
        </div>
      </div>

      {contracts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
