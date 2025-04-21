import React, { useEffect, useState } from "react";
import { Atom } from "lucide-react";

function Loading({ stopLoading }) {
  const [text, setText] = useState(" ");
  const fullText = "<Hello World/> ! ";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        stopLoading();
      }
    }, 200);
  }, []);
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full min-h-screen text-4xl font-mono ">
      <div className="h-[100px]">{text}</div>
      <div>
        <Atom size={50} className="text-indigo-700 rotate" />
      </div>
    </div>
  );
}

export default Loading;
