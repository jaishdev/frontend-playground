import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider , GithubAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_-rrtoCatZgrWqiTi6mDtty0ZKv_t3bU",
  authDomain: "trial-f2720.firebaseapp.com",
  projectId: "trial-f2720",
  storageBucket: "trial-f2720.firebasestorage.app",
  messagingSenderId: "521831660428",
  appId: "1:521831660428:web:b91c198c142e39403ef4a9",
  measurementId: "G-G4GVELE4G5"
};


const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const auth = getAuth(app);