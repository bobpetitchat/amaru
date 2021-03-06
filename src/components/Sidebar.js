import React, { useContext } from "react"
import { TitleContext } from "./context/TitleContext"

const Sidebar = () => {
  const { setSelectedTitle } = useContext(TitleContext)
  return (
    <div className="flex column cursor-pointer font-black" style={{ height: "420px", fontSize: "14px" }}>
      <ul>
        {[
          ["Lifestyle", "/lifestyle"],
          ["Running", "/running"],
          ["Training", "/training"],
          ["Gym", "/gym"],
          ["Athletics", "/athletics"],
          ["Walking", "/walking"],
          ["Basketball", "/basketball"],
          ["Skateboarding", "/skateboarding"],
          ["Golf", "/golf"],
          ["Football", "/football"],
        ].map(([title, url]) => (
          <li onClick={(e) => setSelectedTitle(e.currentTarget.innerText)} key={title.toString()} value={title} className="py-1.5 hover:text-pink-500" href={url}>{title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar

