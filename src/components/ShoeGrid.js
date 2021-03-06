import React, { useContext, useState, useEffect } from "react"
import { ViewContext } from "./context/ViewContext"
import { TitleContext } from "./context/TitleContext"
import { db } from "../firebase-config"
import { onSnapshot, doc } from "firebase/firestore"
import Shoe from "./Shoe"
import { v4 as uuidv4 } from "uuid"
import _ from 'lodash'

const ShoeGrid = () => {
  const docRef = doc(db, "shoesdetails", "yYMa3pvIT2QEtseSY8vi")

  const { selected, updatedValue } = useContext(ViewContext)
  const { selectedTitle } = useContext(TitleContext)

  const [shoes, setShoes] = useState([])
  const [justReleased, setJustReleased] = useState([])
  const [sale, setSale] = useState([])
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setShoes(doc.data())
    })
    /* eslint-disable */
  }, [])

  const filterTags = (shoe) => {
    if (justReleased.includes(shoe) || sale.includes(shoe)) return
    shoe.tag === "justreleased" ? setJustReleased([...justReleased, shoe]) : setSale([...sale, shoe])
  }

  useEffect(() => {
    shoes.shoelist !== undefined ?
      shoes.shoelist.map((shoe) => {
        shoe.tag ? filterTags(shoe) : ""
      }) : ""
  }, [selected])

  useEffect(() => {
    setSearchResult([])
    if (updatedValue !== "") {
      shoes.shoelist.filter((shoe) => {
        if (shoe.name.toString().toLowerCase().includes(updatedValue))
        setSearchResult((searchResult) => [...searchResult, shoe])
      })
    }
  }, [updatedValue])

  if (updatedValue == "" && selectedTitle === "Running")
    return (
      <div className="grid grid-cols-4 grid-rows-3 gap-x-10 gap-y-10">
        {selected === "all" && shoes.shoelist !== undefined ? _.shuffle(shoes.shoelist).map((shoe) => {
          return <Shoe key={uuidv4()} shoe={shoe} />
        }) : ""}
        {selected === "newestreleases" ? justReleased.map((shoe) => {
          return <Shoe key={uuidv4()} shoe={shoe} />
        }) : ""}
        {selected === "sale" ? sale.map((shoe) => {
          return <Shoe key={uuidv4()} shoe={shoe} />
        }) : ""}
      </div>
    )
  if (updatedValue !== "")
    return (
      <div className="grid grid-cols-4 grid-rows-3 gap-x-10 gap-y-10">
         {searchResult.map((shoe) => {
          return <Shoe key={uuidv4()} shoe={shoe} />
        })}
      </div>
    )
  if (selectedTitle !== "Running") 
    return (
        <div className="flex row justify-center items-center font-black">
          <p>{`Here you'll find all the ${selectedTitle} shoes`}</p>
        </div>
    )
}

export default ShoeGrid
