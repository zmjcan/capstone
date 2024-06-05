import "./DashboardPage.scss";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

export default function DashboardPage() {
  return (
    <>
      <section className="dashboard">
        <h2 className="dashboard__title">Profile:</h2>
        <form className="dashboard__form">
          <div className="dashboard__container">
            <label htmlFor="dashboardName" className="dashboard__label">
              Name:
            </label>
            <input
              type="text"
              name="dashboard_Name"
              id="dashboardName"
              className="dashboard__input"
              placeholder="Update Your Name"
            />
            <Button buttonType="submit" buttonText="Update" />
          </div>
          <div className="dashboard__container">
            <label htmlFor="dashboardEmail" className="dashboard__label">
              Email:
            </label>
            <input
              type="text"
              name="dashboard_Email"
              id="dashboardEmail"
              className="dashboard__input"
              placeholder="Update Your E-mail Address"
            />
            <Button buttonType="submit" buttonText="Update" />
          </div>
          <div className="dashboard__container">
            <label htmlFor="dashboardPw" className="dashboard__label">
              Email:
            </label>
            <input
              type="password"
              name="dashboard_Pw"
              id="dashboardPw"
              className="dashboard__input"
              placeholder="Update Your Password"
            />
            <Button buttonType="submit" buttonText="Update" />
          </div>
          <div className="dashboard__btn-container">
            <Button buttonType="reset" buttonText="Reset" />
            <Button buttonType="submit" buttonText="Submit" />
          </div>
        </form>
        <h2 className="dashboard__title">My Tracked Pets:</h2>
        <section className="dashboard__gallery">
            {/* need map here */}
            <img className="dashboard__img" src="../../src/assets/images/pets-03.png" alt="adorable pet image"/>
            <img className="dashboard__img" src="../../src/assets/images/pets-04.png" alt="adorable pet image"/>
            <img className="dashboard__img" src="../../src/assets/images/pets-02.png" alt="adorable pet image"/>
            <img className="dashboard__img" src="../../src/assets/images/pets-01.png" alt="adorable pet image"/>
            <img className="dashboard__img" src="../../src/assets/images/pets-06.png" alt="adorable pet image"/>
            <img className="dashboard__img" src="../../src/assets/images/pets-05.png" alt="adorable pet image"/>
            </section>
        <Footer/>
      </section>
    </>
  );
}
