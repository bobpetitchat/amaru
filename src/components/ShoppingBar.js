import React from "react"
import SelectMenu from "./SelectMenu"

const ShoppingBar = () => {
  return (
    <div className="flex flex-row justify-between items-center" style={{width: "100%", height: "50px"}}>
      <div className="left">
      <div className="text-xl text-grey-900 leading-6 font-black mx-6">Running</div>         
      </div>
      <div className="right flex flex-row justify-center items-baseline gap-1.5">
        <button className="font-extrabold pb-3.5 text-sm" style={{width: "40px"}}>Sort</button>
        <SelectMenu />
      </div>
    </div>
  )
}

export default ShoppingBar