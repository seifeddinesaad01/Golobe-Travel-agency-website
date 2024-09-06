import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseCredentials = {
  apiKey: "AIzaSyCtYVs6N56Z12Fm3spZwWgNB_NnZdxv9rY",
  authDomain: "react-firebase-auth-f1039.firebaseapp.com",
  projectId: "react-firebase-auth-f1039",
  storageBucket: "react-firebase-auth-f1039.appspot.com",
  messagingSenderId: "273776555646",
  appId: "1:273776555646:web:2254e9d086c4b81088ca2f",
  measurementId: "G-L9NLJC6V32",
};

Object.keys(firebaseCredentials).forEach((key) => {
  const configValue = firebaseCredentials[key] + "";
  if (configValue.charAt(0) === '"') {
    firebaseCredentials[key] = configValue.substring(1, configValue.length - 1);
  }
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const firebaseConfig = firebaseCredentials;
export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(firebaseApp);
