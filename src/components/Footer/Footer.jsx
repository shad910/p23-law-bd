import React from 'react';
import { NavLink } from 'react-router';
import "./FooterCSS.css"

const Links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/my-bookings">My-Bookings</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
</>

const Footer = () => {

    return (
        <footer className="footer footer-horizontal footer-center bg-[#0F0F0F] text-primary-content p-10">
            <aside>
                <div className='flex items-center gap-2.5'>
                    <img className='w-[35px]' src="https://i.ibb.co.com/B5NHWrx3/logo-footer.png" alt="Law. BD" />
                    <h2 className='plus-jakarta-sans text-2xl text-white font-extrabold'>Law.BD</h2>
                </div>
                <ul className='md:flex space-y-2.5 md:space-y-0 gap-9 px-1 rounded-none mt-7'>
                    {Links}
                </ul>
            </aside>
            <div className='w-full border border-dashed border-[#4d4c4c33]'></div>
            <nav>
                
                <div className="grid grid-flow-col gap-4">
                    
                    <a href="https://www.facebook.com/shadshs91">
                        <img className='w-[25px]' src="https://i.ibb.co.com/jk6xD7Sk/facebook-1.png" alt="" />
                    </a>

                    <a href="https://www.instagram.com/shadshs91/">
                        <img className='w-[25px]' src="https://i.ibb.co.com/m5RpCK7K/instagram.png" alt="" />
                    </a>

                    <a href="https://x.com/shadshs91">
                        <img className='w-[25px]' src="https://i.ibb.co.com/93TS9HqW/twitter-1.png" alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/md-sahadot-hossen-shad-838251345/">
                        <img className='w-[25px]' src="https://i.ibb.co.com/mL1Gc9g/linkedin.png" alt="" />
                    </a>

                    <a href="https://github.com/shad910">
                        <img className='w-[26px] ' src="https://i.ibb.co.com/N61tpTrW/github.png" alt="" />
                    </a>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;