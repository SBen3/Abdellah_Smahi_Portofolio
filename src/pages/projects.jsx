import React from "react";
import { MoveRight } from "lucide-react";
import RevealScroll from "../components/revealScroll";
import flower from "../../src/assets/flower.jpg";
import admin from "../../src/assets/admin.png";
import game from "../../src/assets/game.jpg";
function Projects() {
  return (
    <RevealScroll>
      <section
        id="projects"
        className="w-full min-h-screen flex flex-col items-center gap-15 pt-25 cursor-default"
      >
        <h1 className=" w-fit h-fit text-3xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 text-transparent bg-clip-text">
          Featured Projects
        </h1>
        <ul className="w-[50%] max-md:w-[90%] grid grid-cols-1 gap-10">
          <li className="flex flex-col gap-5 py-10 border-1 border-slate-800 rounded-md duration-300">
            <p className="text-center flex justify-center font-bold ">
              Flower Shop
            </p>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col px-10 gap-7">
                <p className="text-sm text-gray-400 text-center leading-7 ">
                  This project showcases a responsive website designed to adapt
                  seamlessly to various screen sizes and devices, making it easy
                  for customers to browse our flower shop from any device.
                </p>
                <div className="flex self-center w-[300px] h-[180px] text-center rounded-md hover:scale-105 duration-300 overflow-hidden">
                  <img
                    className="m-auto rounded-md cursor-pointer"
                    src={flower}
                    alt=""
                    onClick={() => {
                      window.open(
                        "https://flower-two-gray.vercel.app/",
                        "_blank"
                      );
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <ul className="flex flex-wrap justify-center px-10 gap-5">
                  <li className="text-sm bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
                    Html
                  </li>
                  <li className="text-sm bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
                    Css
                  </li>
                  <li className="text-sm bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
                    JavaScript
                  </li>
                </ul>
                <button
                  className="flex self-center text-indigo-800 hover:text-indigo-600 cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://flower-two-gray.vercel.app/",
                      "_blank"
                    );
                  }}
                >
                  <p className="hover:mr-2 duration-300">View Project</p>{" "}
                  <MoveRight className="ml-2 mt-0.5" />
                </button>
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-5 py-10 border-1 border-slate-800 rounded-md duration-300">
            <p className="text-center flex justify-center font-bold ">
              Dinosaur Game
            </p>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col px-10 gap-7">
                <p className="text-sm text-gray-400 text-center leading-7 ">
                  Enjoy a 2D game experience with a fun visual design, developed
                  using Object Oriented Programming . This project showcases my
                  skills in creating a cohesive and fun gaming experience.
                </p>
                <div className="flex self-center text-center rounded-md w-[300px] h-[180px] overflow-hidden">
                  <img
                    className="rounded-md w-[100%] h-[120%] hover:scale-105 duration-300 cursor-pointer"
                    src={game}
                    alt=""
                    onClick={() => {
                      window.open(
                        "https://dinosaur-game-alpha.vercel.app/",
                        "_blank"
                      );
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <ul className="flex flex-wrap justify-center px-10 gap-5">
                  <li className="text-sm bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
                    Html
                  </li>
                  <li className="text-sm bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
                    Css
                  </li>
                  <li className="text-sm bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
                    JavaScript
                  </li>
                </ul>
                <button
                  className="flex self-center text-indigo-800 hover:text-indigo-600 cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://dinosaur-game-alpha.vercel.app/",
                      "_blank"
                    );
                  }}
                >
                  <p className="hover:mr-2 duration-300">View Project</p>{" "}
                  <MoveRight className="ml-2 mt-0.5" />
                </button>
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-5 py-10 border-1 border-slate-800 rounded-md duration-300">
            <p className="text-center flex justify-center font-bold ">
              Admin Dashbord
            </p>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col px-10 gap-7">
                <p className="text-sm text-gray-400 text-center leading-7 ">
                  A Modern Admin Dashboard. The user interface was built for a
                  consistent and responsive experience.
                </p>
                <div className="flex self-center text-center rounded-md w-[300px] h-[180px]">
                  <img
                    className="rounded-md w-[100%] h-[100%] hover:scale-105 duration-300 cursor-pointer"
                    src={admin}
                    alt=""
                    onClick={() => {
                      window.open(
                        "https://admin-dashbord-three.vercel.app/",
                        "_blank"
                      );
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <ul className="flex flex-wrap justify-center px-10 gap-5">
                  <li className="text-sm bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
                    React Js
                  </li>
                  <li className="text-sm bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
                    Tailwind Css
                  </li>
                  <li className="text-sm bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
                    Framer Motion
                  </li>
                </ul>
                <button
                  className="flex self-center text-indigo-800 hover:text-indigo-600 cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://admin-dashbord-three.vercel.app/",
                      "_blank"
                    );
                  }}
                >
                  <p className="hover:mr-2 duration-300">View Project</p>{" "}
                  <MoveRight className="ml-2 mt-0.5" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </RevealScroll>
  );
}

export default Projects;

