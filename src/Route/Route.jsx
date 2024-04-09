import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Updateprofile from "../Pages/Update Profile/Updateprofile";
import Userprofile from "../Pages/User profile/Userprofile";
import Error from "../Pages/Error/Error";


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
        path:"/userprofile",
        element:<Userprofile></Userprofile>
      }
    ]
  },
]);

export default router