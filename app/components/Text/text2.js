import Image from "next/image";

import { Figtree } from "next/font/google";

export const figtree = Figtree({
  subsets: ["latin"],
});

export const Texts = ({ type = "paragraph", children }) => {
  const texttypes = {
    heading: `text-5xl text-black font-bold   ${figtree.className}`,
    subheading: `text-4xl text-black  font-medium   ${figtree.className}`,
    paragraph: `text-base text-stone-200 font-normal  ${figtree.className}`,
  };

  return <div className={texttypes[type]}>{children}</div>;
};

export const links = ({ link, children }) => {
  let links = {
    src,
  };

  return <div src={links[link]}>{children}</div>;
};

export const Btn = ({ type = "black", children, linkss }) => {
  const types = {
    black:
      "bg-black text-white rounded-lg px-[2vh] py-[1vh] inline cursor-pointer font-figtree font-medium",
    white: `${figtree.className} text-black font-figtree font-medium`,
    red: "bg-red-500 text-white rounded px-[2vh] py-[1vh] font-figtree font-medium",
  };

  return (
    <button className={types[type]} href={linkss}>
      {children}
    </button>
  );
};

export const Images = ({ alt, classnames, source }) => {
  const image = {
    imageheading: "h-[50vh] w-[50vw] rounded object-cover object-center",
    icon: "h-[5vh] w-[5vh]",
    search: "h-[3vh] w-[3vh]",
  };

  return (
    <Image
      src={source}
      alt={alt}
      width={500}
      height={500}
      className={image[classnames]}
    />
  );
};

export const Elem = ({ type = "paragraph", children, page }) => {
  const texttypes = {
    heading: "text-6xl text-stone-200 font-medium font-figtree",
    subheading: "text-3xl text-stone-200 font-medium font-figtree",
    paragraph: `text-base text-black font-bold  font-figtree ${figtree.className}`,
  };

  // return <div className={texttypes[type]}>{children}</div>;

  return (
    <a href={page} className={texttypes[type]}>
      {children}
    </a>
  );
};

