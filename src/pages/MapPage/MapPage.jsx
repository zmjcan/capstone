import "./MapPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Map from "../../components/Map/Map";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function MapPage() {

  return (
    <>
      <section className="map">
        <StatsGroup />
        <h2 className="map__title">Map Overview:</h2>
        <Map
          popup_desc={`<strong>We're looking for:</strong><p> 12 furry friends in Toronto</p>`}
          long="-79.383"
          lati="43.653"
          zoom="9"
        />
        <div className="map__btn-container">
          <Link to="/find">
            <Button buttonType="submit" buttonText="Find My Pet !" />
          </Link>
          {/* <Link to="/submit">
            <Button buttonType="submit" buttonText="Submit Info" />
          </Link> */}
        </div>
        <Footer />
      </section>
    </>
  );
}
