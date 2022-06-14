import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
apiKey: "AIzaSyC6mLWtLrN9qcRN5bFxITaPMKUV0xanUa0",
  authDomain: "my-app-92a60.firebaseapp.com",
  databaseURL: "https://my-app-92a60.firebaseio.com",
  projectId: "my-app-92a60",
  storageBucket: "my-app-92a60.appspot.com",
  messagingSenderId: "45287739444",
  appId: "1:45287739444:web:2543867403abb2989afa61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Add a second document with a generated ID.
db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});