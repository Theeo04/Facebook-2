import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { BiHappyBeaming, BiCamera, BiVideo } from "react-icons/bi";

import { addDoc, collection, doc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function dataURLToBlob(dataURL) {
  const byteString = atob(dataURL.split(",")[1]);
  const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
}

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const storageRef = ref(storage, "images");

  const sendPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        message: inputRef.current.value,
        image: session.user.image,
        name: session.user.name,
        email: session.user.email,
        timestamp: serverTimestamp(),
        postImage: null,
      });

      console.log("Document written with ID: ", docRef.id);

      if (imageToPost) {
        const imageRef = ref(storage, `${v4()}`);
        const imageBlob = dataURLToBlob(imageToPost);
        const metadata = {
          contentType: "image/jpeg", // Schimbați tipul de conținut în funcție de tipul imaginii
        };

        await uploadBytes(imageRef, imageBlob, metadata);

        const imageUrl = await getDownloadURL(imageRef);

        // Utilizați updateDoc pentru a actualiza documentul creat mai devreme
        await updateDoc(doc(db, "posts", docRef.id), {
          postImage: imageUrl,
        });
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const sendPostOnEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendPost(e);
    }
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
            ref={inputRef}
            placeholder={`What is on Your Mind, ${session.user.name}?`}
          ></input>
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 trasition duration -150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-1">
        <div className="inputIcon">
          <BiVideo className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filepickerRef.current.click()}
        >
          <BiCamera className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live/Video</p>
          <input
            type="file"
            ref={filepickerRef}
            onChange={addImageToPost}
            onKeyDown={sendPostOnEnter}
            hidden
          />
        </div>
        <div className="inputIcon">
          <BiHappyBeaming className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
