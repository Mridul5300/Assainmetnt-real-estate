import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Updateprofile from "../Pages/Update Profile/Updateprofile";
import Error from "../Pages/Error/Error";
import LogIn from "../Pages/Home/Log In/LogIn";
import Register from "../Register Page/Register";
import EstateDetail from "../Pages/Home/Estate Card/EstateDetail";
import PrivetRoute from "./PrivetRoute";
import Servicess from "../ExtraRoute/Servicess";


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
        element:<PrivetRoute><Updateprofile></Updateprofile></PrivetRoute>
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:'/estate/:id',
        element:<PrivetRoute><EstateDetail></EstateDetail></PrivetRoute>,
        loader:() => fetch('../Estate.json')
        
      },

      {
        path:"/service",
        element:<Servicess></Servicess>
      }
    
    ]
  },
]);

export default router