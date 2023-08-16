import React, { useState, useEffect, useRef } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";
import Image from "next/image";
import { BiLike, BiChat, BiShare } from "react-icons/bi";

function Post({ id, image, postImage, message, timestamp, name }) {
  // const [downloadedPostImage, setDownloadedPostImage] = useState(null);

  // useEffect(() => {
  //   const imageRef = ref(storage, `images/${id}.jpg`);
  //   getDownloadURL(imageRef)
  //     .then((url) => {
  //       setDownloadedPostImage(url);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching post image:", error);
  //     });
  // }, [id]);

  return (
    <div className="flex flex-col pb-6 rounded-xl shadow-md mt-5">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">{timestamp}</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            src={postImage}
            objectFit="cover"
            layout="fill"
            loading="eager"
            alt=""
          />
        </div>
      )}

      {/* {Footer of the Post} */}
      <div className="flex justify-between items-center rounded-b-xl bg-white shadow-md text-grey-400 border-t">
        <div className="inputIcon">
          <BiLike className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon">
          <BiChat className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon">
          <BiShare className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
