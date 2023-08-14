import React from "react";
import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {/* Asta se intampla daca src exista(ex de sus) */}
      {Icon && <Icon className="h-8 text-green-700" />}

      <p className="sm:inline-flex font-mediu">{title}</p>
    </div>
  );
}

export default SidebarRow;
