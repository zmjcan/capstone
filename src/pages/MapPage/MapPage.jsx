import "./MapPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import PetMap from "../../components/PetMap/PetMap";
// import Footer from "../../components/Footer/Footer";


export default function MapPage() {
  return (
    <>
      <section className="map">
        <StatsGroup />
        <h2 className="map__title">Map Overview:</h2>
        <PetMap/>
        {/* <article className="leaflet-container">
        </article> */}
        {/* <Footer/> */}
      </section>
    </>
  );
}
