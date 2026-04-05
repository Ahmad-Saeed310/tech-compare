"use client";

import React from "react";

import Image from "next/image";
import { Images } from "../Text/text2";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Imagesss() {
//   const container = useRef(null);
 const imagesAnimation = useRef(null);

//   useGSAP(
//     () => {
//       // GSAP animations go here
//       gsap.to(".box", { x: 100, repeat: 1, yoyo: true });
//     },
//     { scope: container },
//   ); // scoping selector queries to the container ref

  useGSAP(
    () => {
      gsap.to(".icon1", {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "linear",
      });
    },
    { scope: imagesAnimation }
  );
  return (
    <>
     
     <div
      className="w-full h-[50vh] flex items-center justify-center gap-[5vw]"
      ref={imagesAnimation}
    >
      <Images source="/camera.png" classnames="icon" className="icon1"   />
      <Images source="/headphone.png" classnames="icon" className="icon1" />
      <Images source="/monitorArm.png" classnames="icon" className="icon1" />
      <Images source="/mouse.png" classnames="icon" className="icon1" />
      <Images source="/chair.png" classnames="icon" className="icon1" />
    </div>
    </>
  );
}
