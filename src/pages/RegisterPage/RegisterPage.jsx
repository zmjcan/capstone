import "./RegisterPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <>
      <section className="register">
        <StatsGroup />
        <h2 className="register__title">Register:</h2>
        <form className="register__form">
          <div className="register__container">
            <label htmlFor="regiName" className="register__label">
              Name:
            </label>
            <input
              type="text"
              name="regi_Name"
              id="regiName"
              className="register__input"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="register__container">
            <label htmlFor="regiEmail" className="register__label">
              Email:
            </label>
            <input
              type="text"
              name="regi_Email"
              id="regiEmail"
              className="register__input"
              placeholder="Enter Your E-mail Address"
            />
          </div>
          <div className="register__container">
            <label htmlFor="regiPw" className="register__label">
              Email:
            </label>
            <input
              type="password"
              name="regi_Pw"
              id="regiPw"
              className="register__input"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="register__btn-container">
            <Button buttonType="submit" buttonText="Submit" />
          </div>
        </form>
        <Footer />
      </section>
    </>
  );
}
