import React from "react";
import RevealScroll from "../components/revealScroll";
import Lottie from "lottie-react";
import dots from "./../assets/json/dots.json";
import bg from "./../assets/json/wave.json";
import profile from "../../src/assets/profile.jpg"
function Home() {
  return (
    <RevealScroll>
        <div className="absolute w-[400px] max-sm:w-[250px] opacity-14 -rotate-20 max-sm:translate-y-36">
        <Lottie animationData={bg}/>
        </div>
      <section
        id="home"
        className="w-full min-h-screen flex max-md:flex-col-reverse py-20 md:py-40 px-5 md:px-15  gap-15"
      >
        <div className="flex flex-col gap-5 z-10">
          <h1 className="flex self-center w-fit h-fit text-center text-5xl max-md:text-4xl tracking-wide font-bold p-2 bg-gradient-to-r from-slate-500 to-violet-600 text-transparent bg-clip-text cursor-default">
            Hey , I'm Abdellah Smahi
          </h1>
          <p className="text-center text-[16px] text-gray-400 leading-14 cursor-default">
            I'm a frontend developer with a fair expertise in the React js
            framework . I build scalable and interactive single-page
            applications, leveraging modern JavaScript and best practices . and
            efficient rendering strategies to deliver good user experiences.
          </p>
          <div className="flex justify-around self-center md:w-[70%]">
            <button className="max-sm:text-[12px] px-5 py-3 border-indigo-700 border-2 bg-gradient-to-r from-indigo-700 to-violet-700 hover:opacity-70 hover:-translate-y-1 rounded-md duration-300 cursor-pointer">
              <a href="#projects">View Project</a>
            </button>
            <Lottie animationData={dots} className="max-sm:w-[20%]" />
            <button className="max-sm:text-[12px] px-5 py-3 border-indigo-700 border-2 hover:opacity-70 hover:-translate-y-1 duration-300 rounded-md cursor-pointer">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
        <div className="flex items-center self-center w-[70%]">
          <img
            src={profile}
            className="w-[65%] mx-auto border-1 border-gray-800 hover:shadow-indigo-900 hover:shadow-2xl duration-300 hover:-translate-y-2 opacity-75 rounded-full cursor-pointer"
            alt=""
          />
        </div>
      </section>
    </RevealScroll>
  );
}

export default Home;