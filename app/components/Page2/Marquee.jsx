import "../../globals.css";

export default function Marquee() {
  const marqueeItems = [
    "LG",
    "SONY",
    "SAMSUNG",
    "APPLE",
    "HUAWEI",
    "XIAOMI",
    "OPPO",
    "VIVO",
    "ONEPLUS",
    "ASUS",
    "DELL",
    "HP",
    "LENOVO",
    "ACER",
    "MSI",
    "RAZER",
    "LOGITECH",
    "SANDISK",
    "SEAGATE",
    "WESTERN DIGITAL",
    "INTEL",
  ];

  let elements = [];
  for (let i = 0; i < marqueeItems.length; i++) {
    elements.push(<span key={i}>{marqueeItems[i]}</span>);

    if (i == 7) {
      i = 0;
    }
  }

  return (
    // <div className="marquee-container">
    //     <div className="marquee text-black">
    //         {marqueeItems.map((item, index) => (
    //             <span key={index} className="marquee-item">
    //                 {item}
    //             </span>
    //         ))}
    //     </div>
    // </div>

    <>
      <div className=" w-full Marquee bg-green-500 overflow-hidden whitespace-nowrap">
        <div className="content marquee  text-black  inline-block ">
          {elements}
        </div>
      </div>
    </>
  );
}

