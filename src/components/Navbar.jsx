import { useState } from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
     const [nav, setNav] = useState(false);
     const closeNavOnLargeScreen = () => {
          if (window.innerWidth >= 768) {
               setNav(false);
          }
     };

     return (
          <>
               <div className="w-full flex justify-between items-center py-5">
                    <div className="flex items-center gap-x-2">
                         <img src={logo} alt="logo" loading="lazy" />
                    </div>
                    <ul className="hidden md:flex lg:flex justify-between">
                         <li className="md:px-6 text-sm md:text-sm cursor-pointer capitalize font-inter font-normal text-Dark-grayish-blue hover:text-Soft-red"
                              onClick={() => { setNav(!nav); closeNavOnLargeScreen() }}>Home</li>
                         <li className="md:px-6 text-sm md:text-sm cursor-pointer capitalize font-inter font-normal text-Dark-grayish-blue hover:text-Soft-red"
                              onClick={() => { setNav(!nav); closeNavOnLargeScreen() }}>New</li>
                         <li className="md:px-6 text-sm md:text-sm cursor-pointer capitalize font-inter font-normal text-Dark-grayish-blue hover:text-Soft-red"
                              onClick={() => { setNav(!nav); closeNavOnLargeScreen() }}>Popular</li>
                         <li className="md:px-6 text-sm md:text-sm cursor-pointer capitalize font-inter font-normal text-Dark-grayish-blue hover:text-Soft-red"
                              onClick={() => { setNav(!nav); closeNavOnLargeScreen() }}>Trending</li>
                         <li className="md:px-6 text-sm md:text-sm cursor-pointer capitalize font-inter font-normal text-Dark-grayish-blue hover:text-Soft-red"
                              onClick={() => { setNav(!nav); closeNavOnLargeScreen() }}>Categories</li>
                    </ul>
                    <div onClick={() => { setNav(!nav); }} className="cursor-pointer z-50 md:hidden">
                         {nav ? <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" /><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" /></g></svg> : <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" /><path d="M0 0h40v3H0z" /></g></svg>}
                    </div>
                    {/* navbar toggle phone view */}
                    {nav && (
                         <ul className="h-dvh flex flex-col justify-start items-start absolute top-0 right-0 w-[70%] pt-[30%] bg-Off-white z-40">
                              <li className="px-4 py-4 capitalize text-base font-inter text-Very-dark-blue hover:text-Soft-red cursor-pointer" onClick={() => setNav(!nav)} >Home</li>
                              <li className="px-4 py-4 capitalize text-base font-inter text-Very-dark-blue hover:text-Soft-red cursor-pointer" onClick={() => setNav(!nav)} >New</li>
                              <li className="px-4 py-4 capitalize text-base font-inter text-Very-dark-blue hover:text-Soft-red cursor-pointer" onClick={() => setNav(!nav)} >Popular</li>
                              <li className="px-4 py-4 capitalize text-base font-inter text-Very-dark-blue hover:text-Soft-red cursor-pointer" onClick={() => setNav(!nav)} >Trending</li>
                              <li className="px-4 py-4 capitalize text-base font-inter text-Very-dark-blue hover:text-Soft-red cursor-pointer" onClick={() => setNav(!nav)} >Categories</li>
                         </ul>
                    )}
               </div >
          </>
     );
}

export default Navbar;

