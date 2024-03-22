import React from "react";
import Marketstories from "./Marketstories";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-3">
      <h4
        className="text-red-400 bg-slate-200 text-nowrap text-start text-xl uppercase  md:block hidden"
        style={{ width: "fit-content" }}
      >
        Market Stories
      </h4>
      <Marketstories />
    </div>
  );
};

export default RightBar;
