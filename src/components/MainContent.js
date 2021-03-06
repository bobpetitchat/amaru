import React, { useState } from "react"
import Sidebar from "./Sidebar"
import ShoppingBar from "./ShoppingBar"
import ShoeGrid from "./ShoeGrid"
import { TitleContext } from "./context/TitleContext"

const MainContent = () => {
  const [selectedTitle, setSelectedTitle] = useState("Running")
  return (
    <div className="flex flex-row mt-8" style={{ minWidth: "100%" }}>
      <TitleContext.Provider value={{ selectedTitle, setSelectedTitle }}>
      <div className="px-8 pt-2 mr-2 ml-2 flex flex-row" style={{ minWidth: "150px" }}>
        <Sidebar />
      </div>
      <div className="flex flex-column" style={{ height: "800px", minWidth: "800px" }}>
        <div className="">
          <ShoppingBar />
          <div className="px-0 pl-10 pt-12" style={{ minWidth: "850px" }}>
            <ShoeGrid />
          </div>
        </div>
        </div>
        </TitleContext.Provider>
    </div>
  )
}

export default MainContent

