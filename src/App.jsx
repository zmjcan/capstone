import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import CpsLayout from "./layout/CpsLayout";
import MainPage from "./pages/MainPage/MainPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CpsLayout/>}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* <Route path="/pets" element="" />
        <Route path="/pets/:petId" element="" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
