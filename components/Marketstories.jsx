import React from "react";
import Card from "@mui/material/Card";

import img1 from "../public/images/img1.jpg";
import Image from "next/image";

export default function Marketstories() {
  return (
    <>
   
    <div className="flex flex-col glass p-3 ">
       
   
      <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <Image src={img1} alt="green iguana" layout="responsive" />
      </div>
      <div className="flex flex-col justify-center items-start p-3">
        <p className="text-sm">The Coldest Sunset</p>
        <p className="text-[10px] leading-normal text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore,
        </p>
      </div>
    </div>
    </>
  );
}
