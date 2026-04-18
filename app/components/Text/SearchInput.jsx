"use client";

import { useState } from "react";
import { Btn } from "./text2";
import {Texts} from "./text2"


export default function SearcInput() {
  const [words, setWord] = useState("");

  const wordss = ["yes","Best Student Laptops", "Best CPU’s ", "Best Monitors", "Best TVs","Best Cordless Vaccumes"];

  const checkEqual = n =>   n === "yes" ?  console.log("it is") : console.log("itsnot");  


  const [change , setChange] = useState("Changes")
    

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
      
<Texts children={change} type="heading" />

      <Btn childrenS="Check" onClick={() => {setChange(words)}}/>


      
      </div>
    </>
  );
}
