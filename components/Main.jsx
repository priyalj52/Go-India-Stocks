"use client";

import { useState } from "react";
import DiscussionForum from "./DiscussionForum";

import RightBar from "./RightBar";
import Sidebar from "./Sidebar";
import Feed from "./Tab";

import { IoMdArrowDropright } from "react-icons/io";
const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="flex gap-3 items-stretch justify-start w-full min-h-screen ">
      <div
        className={`flex md:relative absolute  transition ease-in-out delay-400 ${
          showSidebar ? "md:w-1/4 w-1/2 " : "w-0"
        } `}
        style={{
          zIndex: 20,
          md: { zIndex: 0 },
        }}
      >
        <Sidebar showSidebar={showSidebar} />
        <button
          onClick={toggleSidebar}
          className={"bg-[#154C79] h-20 mt-[200px]"}
        >
          <IoMdArrowDropright />
        </button>
      </div>

      <div className="flex-1 md:block hidden w-2/3">
        <DiscussionForum />
      </div>
      <div className=" w-1/5  gap-2   flex-none   md:block hidden">
        <RightBar />
      </div>
      <div className="block md:hidden w-full ">
        <Feed />
      </div>
    </div>
  );
};

export default Main;
