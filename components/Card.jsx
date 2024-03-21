import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import data from "@/utils/data";

const Card = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api")
  //     .then((response) => {response.json()
  //       console.log(response)})
      
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching items:", error));
  // }, []);

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex justify-between glass p-3">
          <div className="flex">
            <div className="block">
              <img src={item.img} alt="hi" className="rounded-full  w-[30px]"   />
              {console.log(item.img)}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <div>{item.title}</div>
                <button
                  type="button"
                  className="bg-[#154C79] text-white border-1 rounded-full text-xs p-1"
                >
                  Sector2
                </button>
              </div>
              <div className="text-sm">{item.text}</div>
              <div className="flex justify-start items-start gap-[3rem]">
                <div className="flex justify-center gap-1 ">
                  <CiHeart /> <span className="text-xs">2k</span>
                </div>
                <div className="flex justify-center gap-1 ">
                  <MdOutlineRemoveRedEye />
                  <span className="text-xs">2k</span>
                </div>
                <div className="flex justify-center gap-1 ">
                  <CiBookmark />
                  <div className="text-[2px] text-nowrap">2k comments</div>
                </div>
                <div className="flex justify-center gap-1 ">
                  <CiShare2 />
                  <span className="text-xs">Share</span>
                </div>
              </div>
            </div>
          </div>
          <span className="text-[2px] text-blue-400 w-1/3">2min ago</span>
        </div>
      ))}
    </>
  );
};

export default Card;
