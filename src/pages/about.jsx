import React from "react";
import RevealScroll from "../components/revealScroll";
import { Aperture, BrainCircuit, GraduationCap } from "lucide-react";

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
        <div className="flex flex-col items-center gap-20 w-[70%] max-lg:w-[90%] px-25 py-10 max-lg:px-5 border-1 border-gray-900 rounded-md">
          <div className="flex flex-col gap-10">
            <div className="flex font-bold self-center text-2xl gap-2">
              <Aperture color={"#303F9F"} size={32} />
              Snapshot
            </div>
            <ul className="grid max-md:grid-cols-1 gap-5">
              <li className="text-gray-400 border-1 border-gray-800 border-l-indigo-600 border-l-2 px-8 py-5 leading-10 rounded-md hover:-translate-y-1.5 hover:bg-slate-950 duration-300 cursor-default">
                Front-end developer passionate about turning creative ideas into
                functional and visually appealing websites and apps. Skilled in
                building dynamic and responsive interfaces with React,
                understanding responsive design and committed to clean,
                maintainable code.
              </li>
              <li className="text-gray-400 border-1 border-gray-800 border-l-indigo-600 border-l-2 px-8 py-5 leading-10 rounded-md hover:-translate-y-1.5 hover:bg-slate-950 duration-300 cursor-default">
                I'm now eager to bring my enthusiasm and growing skillset to a
                collaborative environment where I can contribute to exciting
                projects and continue my learning journey. If you're looking for
                a dedicated and passionate frontend developer ready to dive in
                and make a difference, I'd love to connect!
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="flex self-center font-bold text-2xl gap-2">
              <BrainCircuit color={"#303F9F"} size={32} />
              My Skills
            </h1>
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
          <div className="flex flex-col gap-8">
            <h1 className="flex self-center font-bold text-2xl gap-2">
              <GraduationCap color={"#303F9F"} size={32} />
              Education
            </h1>
            <div className="text-gray-400 border-1 border-gray-800 border-t-indigo-600 border-t-2 px-8 py-5 leading-10 rounded-md hover:-translate-y-1.5 hover:bg-slate-950 duration-300 cursor-default">
              <p>
                • Sociology of Organization and Work , Dr Moulay Tahar
                University
              </p>
              <p>• Bachelor's degree</p>
              <p>• 2016 - 2021</p>
            </div>
          </div>
        </div>
      </section>
    </RevealScroll>
  );
}

export default About;
