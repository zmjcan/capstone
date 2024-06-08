import "./RegisterPage.scss";
import StatsGroup from "../../components/StatsGroup/StatsGroup";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import Character from "../../components/Character/Character";

export default function RegisterPage({ isRegistered, setIsRegistered }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
    console.log(formData);
  };

  async function submitRegister(e) {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post(
        // `${import.meta.env.TF_PRIVATE_URL}users/register`,
        "http://localhost:8080/private/users/register",
        formData
      );
      if (response.status === 201) {
        alert("Successfully Registered! Redirecting to Login...");
        setIsRegistered(true); // here we set a state that was in highest level (app level)
        navigate("../user/login");
      } else {
        throw new Error("Failed registration, please try again");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  }

  return (
    <>        
    {/* <Character/> */}
      <section className="register">
        <StatsGroup />

        <h2 className="register__title">Register:</h2>
        <form className="register__form" onSubmit={submitRegister}>
          <div className="register__container">
            <label htmlFor="user_name" className="register__label">
              Name:
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="register__input"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
          </div>
          <div className="register__container">
            <label htmlFor="user_email" className="register__label">
              Email:
            </label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              className="register__input"
              placeholder="Enter Your E-mail Address"
              onChange={handleChange}
            />
          </div>
          <div className="register__container">
            <label htmlFor="user_password" className="register__label">
              Password:
            </label>
            <input
              type="password"
              name="user_password"
              id="user_password"
              className="register__input"
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
          </div>
          <div className="register__btn-container">
            <Button buttonType="submit" buttonText="Submit" />
            <Link to="../user/login">
              <Button buttonType="button" buttonText="Already Registered, take me to Login" />
            </Link>
          </div>
        </form>
        <Footer />
      </section>
    </>
  );
}
