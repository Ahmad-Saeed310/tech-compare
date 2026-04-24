import { Texts, Links, Btn, Imagess, Elem, Box } from "./../Text/text2";

import Marquee from "./Marquee"

export const Page2 = () => {
  return (
    <div className="h-screen w-full bg-stone-50 pt-5">
      <Texts type="heading">Select a Product Category</Texts>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4 h-[80vh] w-full  mt-5">
        <Box
          className="bg-amber-500 col-span-1 object-cover row-span-2 rounded-lg overflow-hidden"
          childrens={
            <>
              <Texts type="subheading">Computer</Texts>

              {/* <Imagess source="/camera.png" classnames="imageheading" /> */}
            </>
          }
        />
        <Box
          className="bg-amber-500 col-span-2 row-span-2  rounded-lg overflow-hidden"
          childrens={
            <>
              <Texts type="subheading">Entertainment</Texts>
              {/* <Imagess source="/camera.png" classnames="imageheading" /> */}
            </>
          }
        />
        <Box
          className="bg-amber-500 col-span-1 row-span-4 object-cover  rounded-lg overflow-hidden"
          childrens={
            <>
              <Texts type="subheading">Home</Texts>

              {/* <Imagess source="/camera.png" classnames="imageheading" /> */}
            </>
          }
        />
        <Box
          className="bg-amber-500 col-span-2 row-span-2  object-fill rounded-lg overflow-hidden"
          childrens={
            <>
              <Texts type="subheading">Audio</Texts>

              {/* <Imagess source="/camera.png" classnames="imageheading" /> */}
            </>
          }
        />

        <Box
          className="bg-amber-500 col-span-1 row-span-2  object-contain rounded-lg overflow-hidden"
          childrens={
            <>
              <Texts type="subheading">Kitchen</Texts>

              {/* <Imagess source="/camera.png" classnames="imageheading" /> */}
            </>
          }
        />
      </div>
      <Marquee />
    </div>
  );
};
