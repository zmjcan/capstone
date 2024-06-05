import "./FindPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function FindPage() {
  return (
    <>
      <section className="find">
        <StatsGroup />
        <h2 className="find__title">Find My Pet:</h2>
        <div className="find__container">
          <label htmlFor="petName" className="find__label">
            Pet Name:
          </label>
          <input
            type="text"
            name="pet_Name"
            id="petName"
            className="find__input"
            placeholder="Enter Pet Name"
          />
        </div>
        <div className="find__container">
          <label htmlFor="locationName" className="find__label">
            Seen Location:
          </label>
          <input
            type="text"
            name="location_Name"
            id="locationName"
            className="find__input"
            placeholder="Enter Location or use Pin on Map below"
          />
        </div>
        <div className="find__container">
          <label htmlFor="finderName" className="find__label">
            Owner Name:
          </label>
          <input
            type="text"
            name="owner_Name"
            id="ownerName"
            className="find__input"
            placeholder="Enter Your Preferred Name for Contact Purpose"
          />
        </div>
        <div className="find__container">
          <label htmlFor="finderContact" className="find__label">
            Owner Contact:
          </label>
          <input
            type="text"
            name="owner_Contact"
            id="ownerContact"
            className="find__input"
            placeholder="Enter Your Phone or Email for Contact Purpose"
          />
        </div>
        <div className="find__container">
          <label htmlFor="pinOnMap" className="find__label">
            Pin on Map:
          </label>
          <Link to="/map">
            <Button buttonType="button" buttonText="Map" />
          </Link>
        </div>
        <div className="find__container">
          <label htmlFor="petType" className="find__label">
            Pet type:
          </label>
          {/* Drag and drop component here */}
        </div>
        <div className="find__container">
          <label htmlFor="provideImg" className="find__label">
            Provide an image:
          </label>
          {/* upload image component here */}
        </div>
        <div className="find__container">
            <Button buttonType="reset" buttonText="Reset" />
            <Button buttonType="submit" buttonText="Submit" />
        </div>
        <Footer />
      </section>
    </>
  );
}
