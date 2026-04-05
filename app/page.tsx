
import Nav from "./components/Text/Nav";
import Heading from "./components/Text/Heading";

import SearchInputss from "./components/Text/SearchInput.jsx";

import Imagesss from "./components/images/Images";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-white  flex flex-col itms-center ">
        <Nav />
        <Heading />

        <SearchInputss />

        <Imagesss />
      </div>
    </>
  );
}
