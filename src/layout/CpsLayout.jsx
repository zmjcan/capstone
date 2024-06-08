import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

export default function CpsLayout(isLoggedIn, setIsLoggedIn) {
  return (
    <>
      {/* <div className="min-h-screen flex justify-between flex-col bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900"> */}
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Outlet />
        {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}
