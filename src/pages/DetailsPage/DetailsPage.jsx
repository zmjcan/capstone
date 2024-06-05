import "./DetailsPage.scss";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

export default function DetailsPage() {
  return (
    <>
      <section className="details">
        <h2 className="details__title">Tail Details:</h2>
        <div className="details__form-container">
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
                placeholder="Pet Name"
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
                placeholder="Owner Name"
              />
            </div>
            <div className="details__container">
              <label htmlFor="detailsEmail" className="details__label">
                Owner Contact:
              </label>
              <input
                type="text"
                name="details_Email"
                id="detailsEmail"
                className="details__input"
                placeholder="Update Your E-mail Address"
              />
            </div>
          </form>
          {/* need find here */}
          {/* <div className="dashboard__gallery"> */}
            <img
              className="details__img"
              src="../../src/assets/images/pets-01.png"
              alt="adorable pet image"
            />
          </div>
        {/* </div> */}
        <h2 className="details__title">Last seem location</h2>
        <Footer />
      </section>
    </>
  );
}
