"use client";

import { useState } from "react";
import { Btn } from "../Text/text2";

export const Searchh = ({ searchBar }) => {
  const design = {
    searchBar1:
      "h-[5vh] w-[20vw] ring-stone-900  bg-purple-100 rounded-lg p-2 ",
    text: "h-[5vh] w-[20vw]   bg-purple-100 rounded-lg p-2 ",
  };

  const [words, setWord] = useState("");

  const word = ["React", "Next.js", "GSAP", "Tailwind"];

  return (
    <>
      <form action="">
        <label htmlFor="Search">WordsMatch</label>
        <input
          type="text"
          value={words}
          onChange={(e) => setWord(e.target.value)}
          className={design.searchBar1}
        />
      </form>

      <div className="wordss ">
        {word.map((w) => (
          <p
            className={design.text}
            onClick={() => {
              setWord(w);
            }}
            key={w}
          >
            {w}
          </p>
        ))}
      </div>
    </>
  );
};
