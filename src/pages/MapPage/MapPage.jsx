import "./MapPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import PetMap from "../../components/PetMap/PetMap";
import Button from "../../components/Button/Button";
// import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function MapPage() {
  return (
    <>
      <section className="map">
        <StatsGroup />
        <div className="map__btn-container">
          <Link to="/submit">
            <Button buttonType="submit" buttonText="Submit Info" />
          </Link>
          <Link to="/find">
            <Button buttonType="submit" buttonText="Find My Pet" />
          </Link>
        </div>
        <h2 className="map__title">Map Overview:</h2>
        <PetMap />
        {/* <Footer/> */}
      </section>
    </>
  );
}
