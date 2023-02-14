import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Header {...props}/>
          <Routes>
              <Route path="/" element={<Home {...props}/>} />
              <Route path="/about" element={<About/>} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
