import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import boxes from "./MockBoxes"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import BoxIndex from "./pages/BoxIndex"
import BoxEdit from "./pages/BoxEdit"
import BoxNew from "./pages/BoxNew"

const App = (props) => {
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    readBoxes()
  }, [])

  const readBoxes = () => {
    fetch("/boxes")
      .then((response) => response.json())
      .then((payload) => {
        setBoxes(payload)
      })
      .catch((error) => console.log(error))
  }

  const createBox = (newBox) => {
    fetch("/boxes", {
      body: JSON.stringify(newBox),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readBoxes())
      .catch((errors) => console.log("Box create errors:", errors))
  }

  return (
    <>
      <BrowserRouter>
        <Header {...props}/>
          <Routes>
              <Route path="/" element={<Home {...props}/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/boxindex" element={<BoxIndex boxes={boxes} current_user = {props.current_user} />} />
              <Route path="/boxnew" element={<BoxNew createBox={createBox} current_user={props.current_user}/>} />
              <Route path="/boxedit" element={<BoxEdit/>} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
