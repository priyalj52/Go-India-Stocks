'use client'

import Card from "./Card"



const DiscussionForum = () => {
  return (
  <div className="flex flex-col gap-4 ">
    <h4 className="text-red-400 bg-slate-200 text-start text-xl uppercase ml-2 md:block hidden" style={{width:'fit-content'}}>Discussion Forum</h4>
    <Card/>
   
  </div>
  )
}

export default DiscussionForum