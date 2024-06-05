import "./CommunityPage.scss";
import { Link } from "react-router-dom";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Footer from "../../components/Footer/Footer";

export default function CommunityPage() {
  return (
    <>
      <section className="community">
        <StatsGroup />
        <section className="community__gallery">
            {/* need map here */}
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-01.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-02.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-03.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-04.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-05.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-06.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-07.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-08.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-09.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-10.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-11.png" alt="adorable pet image"/>
            </Link>
            <Link className="community__img-container" to="pets/:petId">
            <img className="community__img" src="../../src/assets/images/pets-12.png" alt="adorable pet image"/>
            </Link>
        </section>
        <Footer/>
      </section>
    </>
  );
}
