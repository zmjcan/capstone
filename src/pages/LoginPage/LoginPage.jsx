import "./LoginPage.scss";
import { AuthProvider } from "../../contexts/AuthContext";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage({isLoggedIn, setIsLoggedIn}) {
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
    console.log(formData)
  };

  async function handleLogin(e){
    e.preventDefault();

    try {
      console.log(formData)
      const response = await axios.post(
        // `${import.meta.env.TF_PRIVATE_URL}users/login/`,
        "http://localhost:8080/private/users/login",
        formData
      );
      if (response.status === 200) {
        const {token, userId} = response.data
        alert("Successfully Logged-in!");
        setIsLoggedIn(true); // here we set a state that was in highest level (app level)
        navigate(`/user/${userId}`);
      } else {
        throw new Error("Failed Login");
      }
    } catch (error) {
      console.error("Error loggin in:", error);
    }

  }


  return (
    <>

      <section className="login">
        <h2 className="login__title">Login:</h2>
        <form className="login__form" onSubmit={handleLogin}>
          <div className="login__container">
            <label htmlFor="user_email" className="login__label">
              Email:
            </label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              className="login__input"
              placeholder="Enter Your E-mail Address"
              onChange={handleChange}
            />
          </div>
          <div className="login__container">
            <label htmlFor="user_password" className="login__label">
              Password:
            </label>
            <input
              type="password"
              name="user_password"
              id="user_password"
              className="login__input"
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
          </div>
          <div className="login__btn-container">
            <Button buttonType="submit" buttonText="Submit" />
          </div>
        </form>
        <Footer />
      </section>
    </>
  );
}
