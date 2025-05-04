import React from 'react';
import "./NavCss.css"
import { NavLink } from 'react-router';

const NavBar = () => {
    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/my-bookings">My-Bookings</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
    </>
    return (
        <nav className="navbar pb-2.5">
            <div className="navbar-start">
                <div className="flex items-center">
                    <img className='w-[35px]' src="https://i.ibb.co.com/YFDLd0jk/logo.png" alt="Law. BD" />
                    <h1 className='plus-jakarta-sans text-2xl font-extrabold'>Law.BD</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2.5 px-1 text-[#0f0f0fb3] rounded-none">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <a className="btn hidden md:flex text-white bg-[#0EA106] rounded-4xl hover:text-[#0EA106] border-[#0EA106] hover:bg-white hover:font-medium">Contact Now</a>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                        {Links}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;