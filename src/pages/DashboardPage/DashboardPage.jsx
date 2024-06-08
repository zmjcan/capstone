import "./DashboardPage.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Character from "../../components/Character/Character";

export default function DashboardPage({setIsLoggedIn}) {
  const { userId } = useParams();
  // console.log(userId)

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState("");

  const [formData, setFormData] = useState({
    user_name: "",
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

    // console.log(formData)
  };

  const validateForm = () => {
    const validationErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        validationErrors[key] = "This field is required.";
      }
    }
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.patch(
        `http://localhost:8080/private/users/${userId}`,
        formData
      );
      if (response.status === 200) {
        alert("Data successfully saved!");
        // navigate("/community");
      } else {
        throw new Error("Failed to update pet");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      <Character/>
      <section className="dashboard">
        <h2 className="dashboard__title">Profile:</h2>
        <form className="dashboard__form" onSubmit={handleSubmit}>
          <div className="dashboard__container">
            <label htmlFor="user_name" className="dashboard__label">
              Name:
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="dashboard__input"
              placeholder="Update Your Name"
              onChange={handleChange}
            />
          </div>
          <div className="dashboard__container">
            <label htmlFor="user_email" className="dashboard__label">
              Email:
            </label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              className="dashboard__input"
              placeholder="Update Your E-mail Address"
              onChange={handleChange}
            />
          </div>
          <div className="dashboard__container">
            <label htmlFor="user_password" className="dashboard__label">
              Password:
            </label>
            <input
              type="password"
              name="user_password" // key to sent data
              id="user_password" //both need to be the same
              className="dashboard__input"
              placeholder="Update Your Password"
              onChange={handleChange}
            />
          </div>
          <div className="dashboard__btn-container">
            <Button buttonType="reset" buttonText="Reset" />
            <Button buttonType="submit" buttonText="Submit" />
          </div>
        </form>

        <h2 className="dashboard__title">My Tracked Pets:</h2>
        <section className="dashboard__gallery">
          {/* need map here */}
          <img
            className="dashboard__img"
            src="http://localhost:8080/pets-03.png"
            alt="adorable pet image"
          />
          <img
            className="dashboard__img"
            src="http://localhost:8080/pets-04.png"
            alt="adorable pet image"
          />
          <img
            className="dashboard__img"
            src="http://localhost:8080/pets-02.png"
            alt="adorable pet image"
          />
          <img
            className="dashboard__img"
            src="http://localhost:8080/pets-01.png"
            alt="adorable pet image"
          />
          <img
            className="dashboard__img"
            src="http://localhost:8080/pets-06.png"
            alt="adorable pet image"
          />
          <img
            className="dashboard__img"
            src="http://localhost:8080/pets-05.png"
            alt="adorable pet image"
          />
        </section>
        <Footer />
      </section>
    </>
  );
}
