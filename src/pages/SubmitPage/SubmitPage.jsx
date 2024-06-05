import "./SubmitPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function SubmitPage() {
  return (
    <>
      <section className="submit">
        <StatsGroup />
        <h2 className="submit__title">Submit Info:</h2>
        <div className="submit__container">
          <label htmlFor="petName" className="submit__label">
            Pet Name:
          </label>
          <input
            type="text"
            name="pet_Name"
            id="petName"
            className="submit__input"
            placeholder="Enter Pet Name"
          />
        </div>
        <div className="submit__container">
          <label htmlFor="locationName" className="submit__label">
            Seen Location:
          </label>
          <input
            type="text"
            name="location_Name"
            id="locationName"
            className="submit__input"
            placeholder="Enter Location or use Pin on Map below"
          />
        </div>
        <div className="submit__container">
          <label htmlFor="finderName" className="submit__label">
            Finder Name:
          </label>
          <input
            type="text"
            name="finder_Name"
            id="finderName"
            className="submit__input"
            placeholder="Enter Your Preferred Name for Contact Purpose"
          />
        </div>
        <div className="submit__container">
          <label htmlFor="finderContact" className="submit__label">
            Finder Contact:
          </label>
          <input
            type="text"
            name="finder_Contact"
            id="finderContact"
            className="submit__input"
            placeholder="Enter Your Phone or Email for Contact Purpose"
          />
        </div>
        <div className="submit__container">
          <label htmlFor="pinOnMap" className="submit__label">
            Pin on Map:
          </label>
          <Link to="/map">
            <Button buttonType="button" buttonText="Map" />
          </Link>
        </div>
        <div className="submit__container">
          <label htmlFor="petType" className="submit__label">
            Pet type:
          </label>
          {/* Drag and drop component here */}
        </div>
        <div className="submit__container">
          <label htmlFor="provideImg" className="submit__label">
            Provide an image:
          </label>
          {/* upload image component here */}
        </div>
        <div className="submit__container">
          <Button buttonType="reset" buttonText="Reset" />
          <Button buttonType="submit" buttonText="Submit" />
        </div>
        <Footer />
      </section>
    </>
  );
}
