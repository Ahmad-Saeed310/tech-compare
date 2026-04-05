"use client";

import { useState } from "react";

export default function SearcInput() {
  const [words, setWord] = useState("");

  const wordss = ["Best Student Laptops", "Best CPU’s ", "Best Monitors", "Best TVs","Best Cordless Vaccumes"];

  const checkEqual =(wo)=>{
    wo === "yes" ?  alert("its is") : alert("itsnot");;
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center gap-[2vh] w-full ">

    
      <form action="search">
        <input
          type="text"
          id="search"
          className="bg-gray-200 w-[30vw] text-stone-900  border-gray-600 rounded-lg px-[2vh] py-[1vh] "
          value={words}
          onChange={(e) => {
            setWord(e.target.value);
          }}
          placeholder="Search"
        />
        
      </form>
      <div className="wor flex gap-[2vh] justify-between  cursor-pointer ">
        {wordss.map((w) => (
          <p key={w} onClick={()=>(setWord(w))} className="text-black">{w}</p>
        ))}
      </div>
      
      </div>
    </>
  );
}
