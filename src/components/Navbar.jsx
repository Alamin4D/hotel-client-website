import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/logo (1).png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 space-y-4 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/"><a>Home</a></NavLink>
                        <NavLink to="/rooms"><a>Rooms</a></NavLink>
                        <NavLink to="/my-bookings"><a>My Booking</a></NavLink>
                    </ul>
                </div>
                <Link to='/'>
                    <img className="w-auto h-7" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base text-gray-500 gap-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "border-b-4 border-yellow-500" : "hover:text-blue-700"}>Home</NavLink>
                    <NavLink to="/rooms" className={({ isActive }) => isActive ? "text-blue-700 border-b-4 border-yellow-500" : "hover:text-blue-700"}>Rooms</NavLink>
                    <NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-blue-700 border-b-4 border-yellow-500" : "hover:text-blue-700"}>My Bookings</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user?.email ? <> <div title={user?.displayName} className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            </div>
                        </div>
                    </div>
                        <button
                            onClick={logOut}
                            className="btn bg-blue-700 text-white">Logout</button>
                    </>
                        :
                        <Link to="/login">
                            <button className="btn bg-blue-700 text-white">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};



export default Navbar;