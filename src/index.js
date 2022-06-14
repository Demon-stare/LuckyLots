import "./styles.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

// Initialize the FirebaseUI Widget using Firebase.
import { initializeApp } from "firebase/firebase-app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/compat/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6mLWtLrN9qcRN5bFxITaPMKUV0xanUa0",
  authDomain: "my-app-92a60.firebaseapp.com",
  databaseURL: "https://my-app-92a60.firebaseio.com",
  projectId: "my-app-92a60",
  storageBucket: "my-app-92a60.appspot.com",
  messagingSenderId: "45287739444",
  appId: "1:45287739444:web:2543867403abb2989afa61"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "./home.html",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: "<your-tos-url>",
  // Privacy policy url.
  privacyPolicyUrl: "<your-privacy-policy-url>"
};

// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);
