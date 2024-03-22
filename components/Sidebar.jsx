import React from "react";
import { CiBellOn, CiChat1, CiDollar, CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
const Sidebar = ({ showSidebar }) => {
  return (
    <div
      className={`bg-[#154C79] min-h-screen  text-white flex flex-col gap-3  ${
        showSidebar ? "p-3 w-full" : "hidden"
      }
    `}
    >
      <div className="flex justify-between gap-5 text-md ">
        <div className="flex gap-2 justify-center items-center">
          <FaUser className={"border-1 rounded-full "} size={20} />
          <span>Hello, User</span>
        </div>
        <div>
          <IoMdNotifications size={20} />
        </div>
      </div>
      <hr className="bg-white" />
      <div className="flex text-nowrap gap-6 items-center justify-between  ">
        <div className="flex gap-2">
          <CiChat1 /> <span>Discussion Forum</span>
        </div>
        <FaAngleDown />
      </div>
      <div className="flex text-nowrap gap-2 items-center ">
        <CiDollar /> <span>Market Stories</span>
      </div>
      <div className="flex flex-col justify-center ml-5 gap-3">
        <div>Sentiment</div>
        <div>Market</div>
        <div>Sector</div>
        <div>WatchList</div>
        <div>Events</div>
        <div>News/Interview</div>
      </div>
    </div>
  );
};

export default Sidebar;
