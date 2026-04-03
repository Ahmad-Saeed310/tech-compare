import { Btn, Texts, Images,  } from "./components/Text/text2";
import Nav from "./components/Text/Nav";


import SearchInputss from "./components/Text/SearchInput.jsx";


export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-white ">
        Here
        <Texts type="heading"> Here</Texts>
        <Texts type="subheading"> This is the best thing you can buy</Texts>
        <Btn linkss="https://www.youtube.com/">Button</Btn>
        {/* <Images alt="computer" classnamess="imageheading" source={Image}></Images> */}
        <Images
          alt="computer"
          classnames="imageheading"
          source="/computerimage.png"
        />
      </div>
      <div className="h-screen w-full bg-white  flex flex-col itms-center ">
        <Nav />
        {/* <Heading  /> */}
        {/* <Searchh searchBar="searchBar1" /> */}
        <SearchInputss />
      </div>
    </>
  );
}
