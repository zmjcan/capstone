import "./LoginPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function LoginPage() {

  return (
    <>
      <section className="login">
        <h2 className="login__title">Login:</h2>
        <form className="login__form">
          <div className="login__container">
            <label htmlFor="regiEmail" className="login__label">
              Email:
            </label>
            <input
              type="text"
              name="regi_Email"
              id="regiEmail"
              className="login__input"
              placeholder="Enter Your E-mail Address"
            />
          </div>
          <div className="login__container">
            <label htmlFor="regiPw" className="login__label">
              Email:
            </label>
            <input
              type="password"
              name="regi_Pw"
              id="regiPw"
              className="login__input"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="login__btn-container">
            <Button buttonType="submit" buttonText="Submit" />
          </div>
        </form>
        <Footer/>
      </section>
    </>
  );
}
