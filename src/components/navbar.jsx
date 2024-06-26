import React from "react";
import { Link, NavLink, Router } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 
        shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.05),0px_1px_0px_0px_rgba(25,28,33,0.01),0px_0px_0px_1px_rgba(25,28,33,0.04)] items-center justify-center space-x-4"
        style={{
            backdropFilter: "blur(16px) saturate(180%)",
            background: "linear-gradient(to top, #1a1a1a, #111111)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-center">
                <div className="text-lg font-bold lg:justify-center">
                    <Link to={"/"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    </Link>
                    <NavLink to={"/Hero"} className="text-2xl block mt-4 lg:inline-block lg:mt-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  mr-4">
                        Home
                    </NavLink>
                    <NavLink to={"/Animals"} className="text-2xl block mt-4 lg:inline-block lg:mt-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mr-4">
                        Talk to me
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;