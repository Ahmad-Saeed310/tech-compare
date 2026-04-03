"use client";

import { useState } from "react";

export default function SearcInput() {
  const [words, setWord] = useState("");

  const wordss = ["word1", "word2", "word3", "word4"];

  const checkEqual =(wo)=>{
    wo === "yes" ?  alert("its is") : alert("itsnot");;
  }

  return (
    <>
      <form action="search">
        <input
          type="text"
          id="search"
          className="bg-gray-400 text-stone-50  border-gray-600 rounded-lg px-2 py-1"
          value={words}
          onChange={(e) => {
            setWord(e.target.value);
          }}
          placeholder="Search"
        />
        <label htmlFor="search">Search</label>
      </form>
      <div className="wor flex gap-[2vh]">
        {wordss.map((w) => (
          <p key={w} onClick={()=>(setWord(w))} className="text-black">{w}</p>
        ))}
      </div>
      <button onClick={()=>(checkEqual(words))}>check</button>
    </>
  );
}
