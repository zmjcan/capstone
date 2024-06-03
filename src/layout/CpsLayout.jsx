import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

export default function CpsLayout() {
  return (
    <>
      <Header />
        <Outlet />
      {/* <Footer /> */}
    </>
  );
}
