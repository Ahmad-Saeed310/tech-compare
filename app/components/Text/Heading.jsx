import {  Texts,  } from "../Text/text2"
import { SearchInputss } from "../Text/SearchInput"



export default function Heading() { 
    return (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center bg-green-400  gap-[2vh]">
            
           <Texts type="heading">Find the Best Products for your Needs</Texts>
           <Texts type="subheading">Find the Best Products for your Needs</Texts>
           <SearchInputss placeholder="Search..."  />
           
        </div>
    )
}   