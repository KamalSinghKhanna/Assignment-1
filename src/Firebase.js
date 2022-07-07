// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFaX_G1EmYl5fK5pbbP2jKGEdxhz94MTs",
  authDomain: "auth-d4bf3.firebaseapp.com",
  projectId: "auth-d4bf3",
  storageBucket: "auth-d4bf3.appspot.com",
  messagingSenderId: "307779910137",
  appId: "1:307779910137:web:5465ca9a613a0748786528",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export var isLoggedIn = false;

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });

  isLoggedIn = true;
};
