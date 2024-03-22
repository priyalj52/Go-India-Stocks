import React from "react";
import Image from "next/image";
import data from "../utils/marketStoriesData";
import img1 from "../public/images/img1.jpg";
export default function Marketstories() {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col glass p-3">
          <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
            <Image src={img1} alt={item.title} layout="responsive" />
          </div>
          <div className="flex flex-col justify-center items-start p-3">
            <p className="text-sm">{item.title}</p>
            <p className="text-[10px] leading-normal text-slate-400">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
