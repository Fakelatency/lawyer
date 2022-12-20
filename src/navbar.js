import React from "react";
import logo from './oirp.png';

export default function Navbar({ fixed }) {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#6366F1] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-center  items-center">
            
            <p
              className="flex text-sm font-bold leading-relaxed k mr-4 py-2 whitespace-nowrap uppercase text-white items-center"
            >
              Olga Brończyk Radca Prawny
              <span className="w-4"></span>
              <img src={logo} className="w-8 h-8"/>
                
            </p>

          </div>
          
        </div>
      </nav>
    </>
  );
}