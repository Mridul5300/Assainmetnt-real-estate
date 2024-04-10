import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../FireBase/Firebase.config";


export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {

     // creatuser
     const creatUser = (email, password) => {
         return  createUserWithEmailAndPassword(auth, email, password)
     }

     const allValues ={
          creatUser
     }
     return (
          <AuthContex.Provider  value={allValues}>
               {children}
          </AuthContex.Provider>
     );
};

export default AuthProvider;