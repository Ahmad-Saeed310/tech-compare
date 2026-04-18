import Image from "next/image";
import { Imagess, Elem, Btn, figtree } from ".././Text/text2";

export default function Nav() {
  return (
    <nav
      className={`w-full h-[10vh] flex items-center justify-between px-[5vw]  grid grid-cols-11 ${figtree.className}`}
    >
      <div className="text-2xl font-bold  flex col-start-1  ">
        <Imagess
          source="/TechCompareIcon.png"
          classnames="icon"
          alt="TechCompare Icon"
        />
        TechCompare
      </div>
      <div className="flex items-center gap-[1vw] col-start-8 col-span-2 text-black">
        <Imagess source="/search.png" classnames="search" alt="Search Icon" />
        <Elem type="paragraph" page="/">
          Home
        </Elem>
        <Elem type="paragraph" page="/">
          Categories
        </Elem>
        <Elem type="paragraph" page="/">
          Compared
        </Elem>
        <Elem type="paragraph" page="/">
          Saved
        </Elem>
      </div>
      <div
        id="authentication"
        className="flex  col-start-11 col-span-2 justify-end "
      >
        <Btn type="white" linkss="/">
          Sign Up/In
        </Btn>
      </div>
    </nav>
  );
}
