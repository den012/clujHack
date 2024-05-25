import React from "react";
import Animals from "../components/Animals";
import { Link, NavLink, Router } from "react-router-dom";
const Navbar = () => {



    return(
        <nav className="flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 
        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4" 
        style={{
            backdropFilter: "blur(16px) saturate(180%)",
            background: "linear-gradient(to right, #2e2e2e, #222222)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-center">
                <div className="text-sm lg:justify-center">
                    <Link to={"/"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    </Link>
                    <NavLink to={"/Animals"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Animals
                    </NavLink>
                    <NavLink to={"/Hero"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Hero
                    </NavLink>
                </div>
               
            </div>
        </nav>
        
    );
};

export default Navbar;