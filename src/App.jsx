import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import CpsLayout from "./layout/CpsLayout";
import MainPage from "./pages/MainPage/MainPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import MapPage from "./pages/MapPage/MapPage";
// import PetMap from "./components/PetMap/PetMap";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CpsLayout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="map" element={< MapPage/>} />

          {/* <Route path="/pets/:petId" element="" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
