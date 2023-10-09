import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);







    const handelLogOut = () => {
        logOut()
            .then(result => console.log(result.user))
            .catch(err => console.error(err))
    }

    const navLinks = <div className="text-xl space-x-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </div>

    return (
        <div className="my-1">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-4xl"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end pr-7 lg:pr-0">
                    {
                        user ? <div className="flex gap-2 items-center">
                            <span>{user?.displayName}</span>
                            <div className="avatar">
                                <div className="w-8 md:w-12 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            {/* <img className="h-9 rounded-full border-none" src={user?.photoURL} alt="" /> */}
                            <button onClick={handelLogOut} className="bg-[#fffb05] text-sm md:text-lg text-black px-2 md:px-4 py-1 rounded">Log Out</button>
                        </div>
                            :
                            <Link to="/login"><button className="bg-[#fffb05] text-lg text-black px-4 py-1 rounded border-r-2 border-b-2 border-gray-950">Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;