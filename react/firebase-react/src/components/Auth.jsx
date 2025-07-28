import React, { useState } from "react";
import { auth} from "../config/firebase";
import { createUserWithEmailAndPassword , signOut} from "firebase/auth";

export const Auth = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // console.log("User signed up:", auth?.currentUser?.email);

    const signUp = async()=>{
        try {
            const userCredential =  await createUserWithEmailAndPassword(auth, email, password)
                const user = userCredential.user;
            console.log("User signed up:", user);
        } catch (error) {
            console.error(error)
        }
    }
    const logOut = async()=>{
        try {
            await signOut(auth)
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
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Auth;
