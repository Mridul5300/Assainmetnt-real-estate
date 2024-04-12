import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../Auth Provider/AuthProvider";


const Navbar = () => {

     const { logout, user } = useContext(AuthContex)

     const Navlinks = <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/updateprofile">Update Profile</NavLink></li>
          <li><NavLink to="/login">Log in</NavLink></li>
     </>
     return (
          <div className="navbar border-b-4 mt-3 bg-base-100">
               <div className="navbar-start">
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                         </div>
                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                              {Navlinks}
                         </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-xl">daisyUI</Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {Navlinks}
                    </ul>
               </div>
               {/* <div className="navbar-end">
                         
                              <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                   <div className="w-10 rounded-full">
                                   <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                   </div>
                              </label>

                              <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"> 
                                   <li>
                                        <button className="btn btn-sm btn-ghost">
                                             Mridul
                                        </button>
                                   </li>
                                   {        
                                     user ?
                                   <button
                                        onClick={logout}
                                        className="btn btn-sm btn-ghost bg-emerald-300">
                                        Log out
                                   </button>:
                                   <Link to={'/login'}>
                              <button className="btn btn-sm  bg-emerald-300">Log In </button>
                         </Link>
                              }
                               </ul>
                         </div> */}
               <div className="navbar-end">

                    {
                         user ? <div className="dropdown dropdown-end flex justify-center items-center gap-2">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:ring-2  hover:ring-green-500">
                                   <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || "https://i.ibb.co/fYRGNg6/profile.jpg"}

                                             title={(user?.displayName) || 'Name not found'}
                                             alt="User avatar"
                                        />

                                   </div>
                              </label>

                              <button onClick={logout} className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">
                                   Logout
                              </button>


                         </div>
                              :
                              <Link to='/login'>
                                   <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">Login</button>
                              </Link>
                    }
               </div>
          </div>
     );
};

export default Navbar;