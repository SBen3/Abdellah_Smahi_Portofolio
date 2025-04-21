import React, { useEffect, useState } from "react";
import {
  CircleChevronDown,
  CircleChevronUp,
  SquareDashedBottomCode,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed flex justify-around  w-full px-25 py-5 max-md:px-10 backdrop-blur-xl border-b-1 border-gray-900 z-15">
      <div className="w-[100%] flex items-center gap-2 text-gray-300 text-xl font-mono font-bold cursor-pointer">
        <SquareDashedBottomCode className="text-indigo-700" size={30} />
        <div>
          SMAHI<span className="text-indigo-700 font-extrabold">.DEV</span>{" "}
        </div>
      </div>
      <div className="max-sm:visible invisible">
        {open ? (
          <div className="w-[100%] min-h-screen absolute top-0 right-0 bg-neutral-950/95 rounded-b-md">
            <ul className="flex flex-col items-center py-25 gap-15">
              <li className="hover:text-gray-400 duration-300 cursor-pointer w-fit">
              <a href="#home" onClick={()=>{setOpen((prev)=>!prev)}}>HOME</a>
              </li>
              <li className="hover:text-gray-400 duration-300 cursor-pointer w-fit">
              <a href="#about" onClick={()=>{setOpen((prev)=>!prev)}}> ABOUT</a>
              </li>
              <li className="hover:text-gray-400 duration-300 cursor-pointer w-fit">
              <a href="#projects" onClick={()=>{setOpen((prev)=>!prev)}}>PROJECTS</a>
              </li>
              <li className="hover:text-gray-400 duration-300 cursor-pointer w-fit">
              <a href="#contact" onClick={()=>{setOpen((prev)=>!prev)}}>CONTACT</a>
              </li>
            </ul>
            <CircleChevronUp
              className="absolute top-6 right-8 hover:text-gray-400 duration-300 cursor-pointer"
              onClick={() => {
                setOpen((prev)=>!prev)
              }}
            />
          </div>
        ) : (
          <CircleChevronDown
            className="absolute top-6 right-8 hover:text-gray-400 duration-300 cursor-pointer"
            onClick={() => {
              setOpen((prev)=>!prev)
            }}
          />
        )}
      </div>
      <div className="invisible sm:visible flex items-center">
        <ul className="flex gap-10 ">
          <li className="hover:text-gray-400 hover:-translate-y-0.5 duration-300 cursor-pointer">
            <a href="#home">HOME</a>
          </li>
          <li className="hover:text-gray-400 hover:-translate-y-0.5 duration-300 cursor-pointer">
            <a href="#about"> ABOUT</a>
          </li>
          <li className="hover:text-gray-400 hover:-translate-y-0.5 duration-300 cursor-pointer">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="hover:text-gray-400 hover:-translate-y-0.5 duration-300 cursor-pointer">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
