import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Updateprofile from "../Pages/Update Profile/Updateprofile";
import Error from "../Pages/Error/Error";
import LogIn from "../Pages/Home/Log In/LogIn";
import Register from "../Register Page/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/updateprofile",
        element:<Updateprofile></Updateprofile>
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

export default router