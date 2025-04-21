import React from "react";
import RevealScroll from "../components/revealScroll";
import Lottie from "lottie-react";
import dots from "./../assets/json/dots.json";
import bg from "./../assets/json/wave.json";

function Home() {
  return (
    <RevealScroll>
        <div className="absolute w-[400px] max-sm:w-[250px] opacity-14 -rotate-20 max-sm:translate-y-36">
        <Lottie animationData={bg}/>
        </div>
      <section
        id="home"
        className="w-full min-h-screen flex items-center max-md:flex-col-reverse pt-25"
      >
        <div className="w-[70%] max-md:w-[100%] flex flex-col items-center gap-8 z-10">
          <h1 className="w-fit h-fit text-center text-5xl max-md:text-4xl tracking-wide font-bold p-2 bg-gradient-to-r from-slate-500 to-violet-600 text-transparent bg-clip-text cursor-default">
            Hey , I'm Abdellah Smahi
          </h1>
          <p className="w-[65%] max-md:w-[80%] text-center text-[16px] text-gray-400 leading-10 cursor-default">
            I'm a frontend developer with a fair expertise in the React js
            framework . I build scalable and interactive single-page
            applications, leveraging modern JavaScript and best practices . and
            efficient rendering strategies to deliver good user experiences.
          </p>
          <div className="flex justify-around w-[50%] max-md:w-[80%]">
            <button className="max-sm:text-[12px] px-5 py-3 border-indigo-700 border-2 bg-gradient-to-r from-indigo-700 to-violet-700 hover:opacity-70 hover:-translate-y-1 rounded-md duration-300 cursor-pointer">
              <a href="#projects">View Project</a>
            </button>
            <Lottie animationData={dots} className="max-sm:w-[20%]" />
            <button className="max-sm:text-[12px] px-5 py-3 border-indigo-700 border-2 hover:opacity-70 hover:-translate-y-1 duration-300 rounded-md cursor-pointer">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
        <div className="w-[18%]">
          <img
            src="../../src/assets/profile.png"
            className="border-1 hover:shadow-indigo-900 hover:shadow-2xl duration-300 hover:-translate-y-2 opacity-75 rounded-full cursor-pointer"
            alt=""
          />
        </div>
      </section>
    </RevealScroll>
  );
}

export default Home;
