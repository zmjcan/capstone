import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import CpsLayout from "./layout/CpsLayout";
import MainPage from "./pages/MainPage/MainPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import MapPage from "./pages/MapPage/MapPage";
import SubmitPage from "./pages/SubmitPage/SubmitPage";
import FindPage from "./pages/FindPage/FindPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CpsLayout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="map" element={< MapPage/>} />
          <Route path="submit" element={< SubmitPage/>} />
          <Route path="find" element={< FindPage/>} />
          <Route path="user/login" element={< LoginPage/>}/>
          <Route path="user/register" element={< RegisterPage/>}/>

          {/* <Route path="/pets/:petId" element="" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
