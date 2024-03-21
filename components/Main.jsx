"use client";

import { useState } from "react";
import DiscussionForum from "./DiscussionForum";
import LeftSidebar from "./LeftSideBar";
import Marketstories from "./Marketstories";
import RightBar from "./RightBar";
import Sidebar from "./Sidebar";
import Feed from "./Tab";
import Tabs from "./Tab";
import Tab from "./Tab";
import { IoMdArrowDropright } from "react-icons/io";
const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="flex gap-3 items-start justify-start">
  <div className="flex absolute w-1/3 " style={{
    zIndex:20,
    md:{zIndex:0}}}>
      {showSidebar && <Sidebar />}
      <button onClick={toggleSidebar} className={"bg-[#154C79] h-20 mt-[200px]" }>
        <IoMdArrowDropright />
      </button>
    </div>

      <div className="flex-1 md:block hidden w-2/3">
        <DiscussionForum />
      </div>
      <div className="flex w-1/3 flex-col gap-2  mt-3 flex-none  items-end md:block hidden">
      <RightBar/>
      </div>
      <div className="block md:hidden m-5 ">
        <Feed />
        hii
      </div>
    </div>
  );
};

export default Main;
