import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]); // Initialize state for posts

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"));

      try {
        const querySnapshot = await getDocs(q);
        const postsData = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          postsData.push({ id: doc.id, data: doc.data() }); // Collect post data
        });
        setPosts(postsData); // Update state with post data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <Post
            key={post.id} // Don't forget to add a key prop when rendering components in a loop
            id={post.id}
            image={post.data.image}
            postImage={post.data.postImage}
            message={post.data.message}
            name={post.data.name}
          />
        ))}
    </div>
  );
}

export default Posts;
