import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"

const App = (props) => {
  return (
    <>
      <BrowserRouter>
      <Header {...props}/>
      <h1>Moving App</h1>
      </BrowserRouter>
    </>
  )
}

export default App
