import "./DetailsPage.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Map from "../../components/Map/Map";


export default function DetailsPage() {
  const { petId } = useParams();
  const [onePet, setOnePet] = useState(null);
  // const [lng, setLng] = useState(-79.383);
  // const [lat, setLat] = useState(43.653);

  useLayoutEffect(() => {
    async function getOnePet() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + "pets/" + petId
        );
        setOnePet(response.data);
        // setLng(response.data.long);
        // setLat(response.data.lati);
      } catch (err) {
        console.error(err);
      }
    }
    getOnePet();
  }, []);


  if (!onePet) return <h3>loading...</h3>;

  return (
    <>
      <section className="details">
        <h2 className="details__title">Tail Details:</h2>
        <article className="details__form-container">
          <form className="details__form">
            <div className="details__container">
              <label htmlFor="detailsName" className="details__label">
                Pet Name:
              </label>
              <input
                type="text"
                name="details_Name"
                id="detailsName"
                className="details__input"
                placeholder={onePet.pet_name}
                disabled
              />
            </div>
            <div className="details__container">
              <label htmlFor="detailsOwnerName" className="details__label">
                Owner Name:
              </label>
              <input
                type="text"
                name="details_OwnerName"
                id="detailsOwnerName"
                className="details__input"
                placeholder={onePet.owner_name}
                disabled
              />
            </div>
            <div className="details__container">
              <label htmlFor="detailsContact" className="details__label">
                Owner Contact:
              </label>
              <input
                type="text"
                name="details_Contact"
                id="detailsContact"
                className="details__input"
                placeholder={onePet.owner_contact}
                disabled
              />
            </div>
            <div className="details__container">
              <label htmlFor="detailsStory" className="details__label">
                Description:
              </label>
              <input
                type="text"
                name="details_Story"
                id="detailsStory"
                className="details__input"
                placeholder={onePet.pet_description}
                disabled
              />
            </div>
            <div className="details__container">
              <label htmlFor="detailsStory" className="details__label">
                Approx. Location:
              </label>
              <input
                type="text"
                name="details_Location"
                id="detailsLocation"
                className="details__input"
                placeholder={onePet.pet_location}
                disabled
              />
            </div>
            {onePet.finder_name && <div className="details__container">
              <label htmlFor="finder_name" className="details__label">
                Finder Name:
              </label>
              <input
                type="text"
                name="finder_name"
                id="finder_name"
                className="details__input"
                placeholder={onePet.finder_name}
                disabled
              />
            </div>}
          </form>
          <img
            className="details__img"
            // src={onePet.pet_image}
            src={`http://localhost:8080/${onePet.pet_image}`}
            alt={onePet.pet_imgalt}
          />
        </article>
        <h2 className="details__title">Last Seen Location:</h2>
        <Map
          popup_desc={
            "<strong>We're looking for :</strong><p>" + onePet.pet_name + "</p>"
          }
          long={onePet.long}
          lati={onePet.lati}
          zoom="13"
        />
        <div className="details__btn-container">
          <Link to={"/submit/" + onePet.id}>
            <Button buttonType="submit" buttonText="Submit Info" />
          </Link>
        </div>
        <Footer />
      </section>
    </>
  );
}
