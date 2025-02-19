import Footer from "../Pages/Footer/Footer"
import Navbar from "../Pages/Navbar/Navbar";
import { Outlet  } from "react-router-dom";


const Root = () => {
     return (
          <div className="max-w-6xl mx-auto">
               
               <Navbar></Navbar>
               
                    <Outlet></Outlet>
               
               <Footer></Footer>
          </div>
     );
};

export default Root;