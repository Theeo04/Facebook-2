import React from "react";
import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 md:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="rounded-full absolute opacity-0 lg:opacity-100 z-50 top-1 left--10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="rounded-full object-cover filter brightness-75 lg:rounded-3xl"
        src={src}
        layout="fill"
      />
    </div>
  );
}

export default StoryCard;
