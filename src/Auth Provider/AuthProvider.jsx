import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.config";


export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState([])
     // creatuser
     const creatUser = (email, password) => {
         return  createUserWithEmailAndPassword(auth, email, password)
     }


     const signInUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
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
          signInUser
     }
     return (
          <AuthContex.Provider  value={allValues}>
               {children}
          </AuthContex.Provider>
     );
};

export default AuthProvider;