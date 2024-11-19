import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from '../Components/common/Menu'
import Footer from '../Components/common/Footer'
import Home from '../Components/views/Home/home'


function App() {
  return (
       <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  )
}

export default App
