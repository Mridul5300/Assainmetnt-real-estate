import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.config";


export const AuthContex = createContext(null)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser]= useState([])
     // creatuser
     const creatUser = (email, password) => {
         return  createUserWithEmailAndPassword(auth, email, password)
     }


     const signInUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }


   const  googleLogin = () => {
     signInWithPopup(auth, googleProvider)
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
          googleLogin
     }
     return (
          <AuthContex.Provider  value={allValues}>
               {children}
          </AuthContex.Provider>
     );
};

export default AuthProvider;