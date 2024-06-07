import "./CommunityPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useLayoutEffect } from "react";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Footer from "../../components/Footer/Footer";


export default function CommunityPage() {
  const [allPets, setAllPets] = useState(null);

  useLayoutEffect(() => {
    async function getAllPets() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + "pets/"
        );
        setAllPets(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getAllPets();
  }, []);

  // console.log(allPets); // 12 object array

  if (!allPets) return <h3>loading...</h3>;

  return (
    <>
      <section className="community">
        <StatsGroup />
        <h2 className="community__title">Click on a tail to find out more!</h2>
        <section className="community__gallery">
          {/* need map here */}
          {allPets.map((pet) => (
            <Link key={pet.id} to={"pets/"+pet.id} className="community__img-container">
              <img
                className="community__img"
                src={`http://localhost:8080/${pet.pet_image}`}
                alt={pet.pet_imgalt}
              />
            </Link>
          ))}
        </section>
        <Footer />
      </section>
    </>
  );
}
