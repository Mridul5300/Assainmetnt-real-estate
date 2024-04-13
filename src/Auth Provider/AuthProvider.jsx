import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, reload, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.config";


export const AuthContex = createContext(null)

const googleProvider = new GoogleAuthProvider();
const gitHubProvider=new GithubAuthProvider()

const AuthProvider = ({children}) => {
     const [reload, setReload]=useState(false)
    const [user, setUser]= useState(null)
    const [loading,setLoading]=useState(true)
//     console.log(user);
     // creatuser
     const creatUser = (email, password) => {
          setLoading(true)
         return  createUserWithEmailAndPassword(auth, email, password)
     }


     const signInUser = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }


   const  googleLogin = () => {
     setLoading(true)
     return signInWithPopup(auth, googleProvider)
   }

   const gitHubLogin = () => {
     setLoading(true)
     return signInWithPopup(auth, gitHubProvider)
   }
// Update Profile
const upDateUser = (name,image) => {
     return updateProfile(auth.currentUser, {
          displayName: name, photoURL: image
        })     
}

// logout
const logout = () => {
     setLoading(true)
     setUser(null)
     signOut(auth)
}

     // observer
     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
               setUser(user)
               
               }
               setLoading(false)
             });
          
     },[reload])


     const allValues ={
          user,
          loading,
          creatUser,
          signInUser,
          googleLogin,
          gitHubLogin,
          logout,
          upDateUser,
          setReload
          
     }
     return (
          <AuthContex.Provider  value={allValues}>
               {children}
          </AuthContex.Provider>
     );
};

export default AuthProvider;