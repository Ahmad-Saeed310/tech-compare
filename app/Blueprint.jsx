import {Texts,Links,Btn,Imagess,Elem} from "./components/Text/text2"

import Function from "./Functions"


export default function BluePrint(){

return (
<>
<Function />

<Texts type="heading">Text heading</Texts>
<Texts type="subheading">subheading</Texts>
<Texts type="paragraph"> paragraph</Texts>

<Links link="https://www.google.com/" children="linkToGoSomewhere" types="paragraph" />

<Btn childrenS="Click Me" type="black" />

<Imagess source="/chair.png" alt="Description" classnames="imageheading" />
</>

)




}