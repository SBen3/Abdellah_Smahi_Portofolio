import React, { useState } from "react";
import RevealScroll from "../components/revealScroll";
import Lottie from "lottie-react";
import contactUs from "./../assets/json/contactUs2.json";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formFunc = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "24e00de3-526f-483c-a7bf-5feb1db0efc1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json(), setForm({ name: "", email: "", message: "" }));
  };
  return (
    <RevealScroll>
      <section
        id="contact"
        className="w-full min-h-screen flex flex-col items-center gap-10 pt-25 pb-25 cursor-default"
      >
        <h1 className="w-fit h-fit text-3xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 text-transparent bg-clip-text">
          Get In touch
        </h1>

        <form
          action=""
          className="flex flex-col w-[70%] max-md:w-[90%] px-25 max-md:px-10 pb-10 gap-5 border-1 border-gray-900 rounded-md"
          onSubmit={onSubmit}
        >
          <div className="flex justify-between items-center max-sm:flex-col-reverse">
            <div className="flex flex-col w-[100%] gap-5">
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={(e) => formFunc(e)}
                placeholder="Your name..."
                className="w-[50%] max-md:w-[75%] p-3 rounded-md border-1 border-gray-900 focus:bg-slate-950 outline-1 outline-indigo-950 duration-300"
              />
              <input
                type="text"
                name="email"
                id="email"
                value={form.email}
                onChange={(e) => formFunc(e)}
                placeholder="example@gmail.com"
                className="w-[50%] max-md:w-[75%] p-3 rounded-md border-1 border-gray-900 focus:bg-slate-950 outline-1 outline-indigo-950 duration-300"
              />
            </div>
            <div className="w-52 h-52 flex">
              <Lottie animationData={contactUs} className="m-auto max-sm:w-[150px]"/>
            </div>
          </div>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={(e) => formFunc(e)}
            placeholder="Your Message..."
            className="p-3 rounded-md border-1 border-gray-900 focus:bg-slate-950 outline-1 outline-indigo-950 duration-300"
            rows={5}
          ></textarea>
          <button className="self-center mt-10 w-32 h-10 rounded-md border-indigo-700 border-2 bg-gradient-to-r from-indigo-700 to-violet-700 hover:opacity-70 duration-300 hover:-translate-y-1 cursor-pointer">
            Submit
          </button>
        </form>
      </section>
    </RevealScroll>
  );
}

export default Contact;
