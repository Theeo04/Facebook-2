import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJiElpG8myHqnEfjvL6dq_Lhl0ePw4PQ0",
  authDomain: "facebookreplica-c758d.firebaseapp.com",
  projectId: "facebookreplica-c758d",
  storageBucket: "facebookreplica-c758d.appspot.com",
  messagingSenderId: "306912747376",
  appId: "1:306912747376:web:a31dba2107de5c4c20f9b5",
  measurementId: "G-237BR4QD89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { db, storage };
