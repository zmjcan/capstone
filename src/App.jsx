import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import CpsLayout from "./layout/CpsLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CpsLayout/>} />
        {/* <Route index element=/> */}
        {/* <Route path="/pets" element="" />
        <Route path="/pets/:petId" element="" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
