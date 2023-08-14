import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-33 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <di className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
      </di>
    </div>
  );
}

export default Feed;
