{
  /* <Post */
}
//           key={post.id}
//           name={post.data().message}
//           message={post.data().message}
//           email={post.data().email}
//           timestamp={post.data().timestamp}
//           image={post.data().image}
//           postImage={post.data().postImage}
//         />

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

  return (
    <div>
      {/* Map over the posts and render the Post component */}
      {posts.map((post) => (
        <Post key={post.id} name={post.id} />
      ))}
    </div>
  );
}

export default Posts;
