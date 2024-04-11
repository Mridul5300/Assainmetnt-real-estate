import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.config";


export const AuthContex = createContext(null)

const googleProvider = new GoogleAuthProvider();
const gitHubProvider=new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    console.log(user);
     // creatuser
     const creatUser = (email, password) => {
         return  createUserWithEmailAndPassword(auth, email, password)
     }


     const signInUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }


   const  googleLogin = () => {
     return signInWithPopup(auth, googleProvider)
   }

   const gitHubLogin = () => {
     return signInWithPopup(auth, gitHubProvider)
   }


// logout
const logout = () => {
     setUser(null)
     signOut(auth)
}

     // observer
     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
               setUser(user)
               }
             });
     },[])


     const allValues ={
          creatUser,
          signInUser,
          googleLogin,
          gitHubLogin,
          logout,
          user
     }
     return (
          <AuthContex.Provider  value={allValues}>
               {children}
          </AuthContex.Provider>
     );
};

export default AuthProvider;