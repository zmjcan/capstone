import "./FindPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import UploadImage from "../../components/UploadImage/UploadImage";

export default function FindPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [imgsrc, setImgsrc] = useState(null);
  const [formData, setFormData] = useState({
    pet_name: "",
    pet_type: "",
    owner_name: "",
    owner_contact: "",
    pet_location: "",
    pet_description: "",
    // pet_image: "",
    pet_imgalt: "user uploaded image",
    long: null,
    lati: null,
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
  };

  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;

  const validateForm = () => {
    const validationErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        validationErrors[key] = "This field is required.";
      }
    }

    // if (!emailRegex.test(formData.contact_email)) {
    //   validationErrors.contact_email = "Invalid email address.";
    // }

    // const letterRegex = /[a-zA-Z]/g;
    // const onlyDigitsPhone = formData.contact_phone.trim().replace(/\D/g, "");

    // if (letterRegex.test(formData.contact_phone)) {
    //   validationErrors.contact_phone = "No letters allowed!";
    // } else if (onlyDigitsPhone.length !== 11) {
    //   validationErrors.contact_phone =
    //     "Invalid phone number. Enter 11 digits in total - country code & area code required.";
    // }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}pets/`,
        formData
      );
      if (response.status === 200) {
        alert("Data successfully saved!");
        navigate("/");
      } else {
        throw new Error("Failed to post pet");
      }
    } catch (error) {
      console.error("Error post pet:", error);
    }
  };

  return (
    <>
      <form className="find" onSubmit={handleSubmit}>
        <h2 className="find__title">Find My Pet:</h2>
        <div className="find__container">
          <label htmlFor="pet_name" className="find__label">
            Pet Name:
          </label>
          <input
            type="text"
            name="pet_name"
            id="pet_name"
            className="find__input"
            placeholder="Enter Pet Name"
            onChange={handleChange}
          />
        </div>
        <div className="find__container">
          <label htmlFor="pet_location" className="find__label">
            Seen Location:
          </label>
          <input
            type="text"
            name="pet_location"
            id="pet_location"
            className="find__input"
            placeholder="Enter Location or use Pin on Map below"
            onChange={handleChange}
          />
        </div>
        <div className="find__container">
          <label htmlFor="owner_name" className="find__label">
            Owner Name:
          </label>
          <input
            type="text"
            name="owner_name" // correspond w onChange data
            id="owner_name"
            className="find__input"
            placeholder="Enter Your Preferred Name for Contact Purpose"
            onChange={handleChange}
          />
        </div>
        <div className="find__container">
          <label htmlFor="owner_contact" className="find__label">
            Owner Contact:
          </label>
          <input
            type="text"
            name="owner_contact"
            id="owner_contact"
            className="find__input"
            placeholder="Enter Your Phone or Email for Contact Purpose"
            onChange={handleChange}
          />
        </div>
        <section className="find__container">
          <label htmlFor="pinOnMap" className="find__label">
            Pin on Map:
          </label>
          <Link to="/map">
            <Button buttonType="button" buttonText="Map" />
          </Link>
        </section>
        <section className="find__container">
          <label htmlFor="pet_type" className="find__label">
            Pet type:
          </label>
          <div>
            <input
              type="radio"
              id="cat"
              name="pet_type"
              value="cat"
              onChange={handleChange}
            />
            <label htmlFor="cat">Cat</label>
          </div>
          <div>
            <input
              type="radio"
              id="dog"
              name="pet_type"
              value="dog"
              onChange={handleChange}
            />
            <label htmlFor="dog">Dog</label>
          </div>
          <div>
            <input
              type="radio"
              id="bird"
              name="pet_type"
              value="bird"
              onChange={handleChange}
            />
            <label htmlFor="bird">Bird</label>
          </div>
          <div>
            <input
              type="radio"
              id="rabbit"
              name="pet_type"
              value="rabbit"
              onChange={handleChange}
            />
            <label htmlFor="rabbit">Rabbit</label>
          </div>
          <div>
            <input
              type="radio"
              id="other"
              name="pet_type"
              value="other"
              onChange={handleChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </section>
        <div className="find__container">
          <label htmlFor="pet_image" className="find__label">
            Provide an image:
          </label>
          {/* upload image component here */}
          <UploadImage
            // formData={formData}
            setFormData={setFormData}
            // imgsrc={imgsrc}
            // setImgsrc={setImgsrc}
          />
        </div>
        <div className="find__container">
          <Button buttonType="reset" buttonText="Reset" />
          <Button buttonType="submit" buttonText="Submit" />
        </div>
        <Footer />
      </form>
    </>
  );
}
