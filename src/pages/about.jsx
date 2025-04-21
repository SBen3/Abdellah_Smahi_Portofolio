import React from "react";
import RevealScroll from "../components/revealScroll";

function About() {
  return (
    <RevealScroll>
      <section
        id="about"
        className="w-full min-h-screen flex flex-col items-center gap-10 pt-25 cursor-default"
      >
        <h1 className="w-fit h-fit text-3xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 text-transparent bg-clip-text">
          About Me
        </h1>
        <div className="flex flex-col items-center gap-10 w-[70%] max-lg:w-[90%] px-25 py-10 max-lg:px-5 max-lg:py-2 border-1 border-gray-900 rounded-md">
          <div className=" font-bold text-2xl">Frontend Developer</div>
          <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
            <li className="text-gray-400 border-1 border-gray-800 border-l-indigo-600 border-l-2 p-5 rounded-md hover:-translate-y-1.5 hover:bg-slate-950 duration-300 cursor-default">
              I'm a self-taught front-end developer with a knack for turning
              creative ideas into functional, visually appealing websites and
              apps. My journey into programming wasn't traditional; I was driven
              by a desire to build apps that people interact with on a daily
              basis. I immersed myself in the world of front-end development.
            </li>
            <li className="text-gray-400 border-1 border-gray-800 border-l-indigo-600 border-l-2 p-5 rounded-md hover:-translate-y-1.5 hover:bg-slate-950 duration-300 cursor-default">
              i'm good in Building dynamic and responsive interfaces with React.
              My learning journey has provided me with a deep understanding of
              responsive design principles and a commitment to writing clean,
              maintainable, and well-documented code.
            </li>
          </ul>
          <ul>
            <li className="text-gray-400 border-1 border-gray-800 border-l-indigo-600 border-l-2 p-5 rounded-md hover:-translate-y-1.5 hover:bg-slate-950 duration-300 cursor-default">
              I'm now eager to bring my enthusiasm and growing skillset to a
              collaborative environment where I can contribute to exciting
              projects and continue my learning journey. If you're looking for a
              dedicated and passionate frontend developer ready to dive in and
              make a difference, I'd love to connect!
            </li>
          </ul>
          <h1 className="text-xl font-bold">My Skills</h1>
          <ul className="w-[100%] flex justify-around flex-wrap gap-5 pb-5">
            <li className="text-center bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
              Html
            </li>
            <li className="text-center bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
              Css
            </li>
            <li className="text-center bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
              JavaScript
            </li>
            <li className="text-center bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
              Tailwind Css
            </li>
            <li className="text-center bg-slate-950 text-indigo-600 rounded-md py-1 px-3 hover:opacity-80 hover:-translate-y-1 duration-300 cursor-pointer">
              React js
            </li>
          </ul>
        </div>
      </section>
    </RevealScroll>
  );
}

export default About;
