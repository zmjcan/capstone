import "./MainPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Feature from "../../components/Feature/Feature";

export default function MainPage() {
  return (
    <>
      <main className="main">
        <StatsGroup/>
        <Feature />
      </main>
    </>
  );
}
