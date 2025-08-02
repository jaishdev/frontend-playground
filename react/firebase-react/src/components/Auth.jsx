import React, { useState } from "react";
import { auth , googleProvider , githubProvider} from "../config/firebase";
import { createUserWithEmailAndPassword , signOut ,signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router";
export const Auth = ({ onSuccess })=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // console.log("User signed up:", auth?.currentUser?.email);

    const signUp = async()=>{
        try {
            const userCredential =  await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            console.log("User signed up:", user.email);
            navigate('/dashboard');
        } catch (error) {
            console.error(error)
        }
    }
    const signInWithGoogle = async()=>{
        try {
            const userCredential =  await signInWithPopup(auth, googleProvider)
            const user = userCredential.user;
            console.log("User signed up:", user);
            navigate('/dashboard');
        } catch (error) {
            console.error(error)
        }
    }
    const signInWithGithub = async()=>{
        try {
            const userCredential =  await signInWithPopup(auth, githubProvider)
            const user = userCredential.user;
            console.log("User signed up:", user);
            if(onSuccess) onSuccess();
        } catch (error) {
            console.error(error)
        }
    }
    const logOut = async()=>{
        try {
            await signOut(auth)
            console.log(auth.currentUser.email)
        } catch (error) {
            console.error(error);
            
        }
    }
    return (
        <div>
            <input type="text" placeholder="email..." onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder="password..." onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button onClick={signUp}>Sign Up</button>
            <button onClick={signInWithGoogle}>Sign In with google</button>
            <button onClick={signInWithGithub}>Sign In with github</button>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Auth;