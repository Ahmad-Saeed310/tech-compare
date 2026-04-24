import Nav from "./components/Text/Nav";
import Heading from "./components/Text/Heading";

import SearchInputss from "./components/Text/SearchInput.jsx";

import Imagesss from "./components/images/Images";

import BluePrint from "./Blueprint";

import { Page2 } from "./components/Page2/Page2";

export default function Home() {
  return (
    <>
      <div id="BluePrint" className="w-full h-screen bg-stone-50">
        <BluePrint />
      </div>

      <div className="h-screen w-full bg-white  flex flex-col itms-center ">
        <Nav />
        <Heading />

        <SearchInputss />

        <Imagesss />
      </div>
      <Page2 />
    </>
  );
}
