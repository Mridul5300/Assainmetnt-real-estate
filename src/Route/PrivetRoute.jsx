import { useContext } from "react";
import { AuthContex } from "../Auth Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
     const {user, loading} = useContext ( AuthContex )
     const location=useLocation()
     console.log(location.pathname);

     if(loading){
          return <span className="loading loading-ring loading-lg  text-center mx-96 mb-3 mt-4"></span>
     }
     if(user){
          return children
     }
     return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivetRoute;