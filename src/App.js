import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Header from "./Components/Header";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes> 
      <Route path="/"  element={<Home/>}/>
      <Route path="/cart"  element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
