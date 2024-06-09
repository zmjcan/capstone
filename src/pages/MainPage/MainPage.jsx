import "./MainPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";

export default function MainPage() {
  return (
    <>
      <main className="main">
        <StatsGroup/>
        <Feature />
        <Footer/>
      </main>
    </>
  );
}
