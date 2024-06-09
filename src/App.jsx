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
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CpsLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isRegistered={isRegistered} setIsRegistered={setIsRegistered}/>}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="user/:userId" element={<DashboardPage setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="community/pets/:petId" element={<DetailsPage isLoggedIn={isLoggedIn}/>} />
          <Route path="map" element={<MapPage />} />
          <Route path="submit" element={<SubmitPage />} />
          <Route path="submit/:petId" element={<SubmitPage />} />
          <Route path="find" element={<FindPage />} />
          <Route path="user/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="user/register" element={<RegisterPage isRegistered={isRegistered} setIsRegistered={setIsRegistered}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
