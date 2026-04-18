"use client"



import { useState } from "react";
import { Btn } from "./components/Text/text2"

export default function Functions() {

  const [change , setChange] = useState("Changes")
  const checkEqual = n =>   n === "yes" ?  console.log("it is") : console.log("itsnot");
    return (
        <>
        <p className="text-black">{change}</p>
        <Btn childrenS="This button works" onClick={() => {setChange("yes")}}/>
        </>
    )   
}