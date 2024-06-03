import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>TailFinder</div>} />
        <Route path="/pets" element="" />
        <Route path="/pets/:petId" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
