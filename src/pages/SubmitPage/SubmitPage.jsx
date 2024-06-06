import "./SubmitPage.scss";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function SubmitPage() {
  const [onePet, setOnePet] = useState(null);
  const { petId } = useParams();

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    pet_name: "",
    // pet_type: "",
    // owner_name: "",
    // owner_contact: "",
    pet_location: "",
    // pet_description: "",
    finder_name: "",
    finder_contact: ""
    // pet_image: "",
    // pet_imgalt: "user uploaded pet image",
    // long: null,
    // lati: null,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

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
    console.log(formData)

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}pets/${onePet.id}`,
        formData
      );
      if (response.status === 200) {
        alert("Data successfully saved!");
        navigate("/community");
      } else {
        throw new Error("Failed to update pet info");
      }
    } catch (error) {
      console.error("Error updating pet info:", error);
    }
  };

  useLayoutEffect(() => {
    async function getOnePet() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + "pets/" + (petId || 1)
        );
        setOnePet(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getOnePet();
  }, []);

  if (!onePet) return <h3>loading...</h3>;

  return (
    <>
      <form className="submit" onSubmit={handleSubmit}>
        <h2 className="submit__title">Submit Info:</h2>
        <div className="submit__container">
          <label htmlFor="pet_name" className="submit__label">
            Pet Name:
          </label>
          <input
            type="text"
            name="pet_name"
            id="pet_name"
            className="submit__input"
            placeholder={onePet.pet_name}
            onChange={handleChange}
          />
          {errors.pet_name && <ErrorMessage message={errors.pet_name} />}
        </div>
        <div className="submit__container">
          <label htmlFor="pet_location" className="submit__label">
            Seen Location:
          </label>
          <input
            type="text"
            name="pet_location"
            id="pet_location"
            className="submit__input"
            placeholder="Enter Location or use Pin on Map below"
            onChange={handleChange}
          />
          {errors.pet_location && (
            <ErrorMessage message={errors.pet_location} />
          )}
        </div>
        <div className="submit__container">
          <label htmlFor="finder_name" className="submit__label">
            Finder Name:
          </label>
          <input
            type="text"
            name="finder_name"
            id="finder_name"
            className="submit__input"
            placeholder="Enter Your Preferred Name for Contact Purpose"
            onChange={handleChange}
          />
          {errors.finder_name && <ErrorMessage message={errors.finder_name} />}
        </div>
        <div className="submit__container">
          <label htmlFor="finder_contact" className="submit__label">
            Finder Contact:
          </label>
          <input
            type="text"
            name="finder_contact"
            id="finder_contact"
            className="submit__input"
            placeholder="Enter Your Phone or Email for Contact Purpose"
            onChange={handleChange}
          />
          {errors.finder_contact && (
            <ErrorMessage message={errors.finder_contact} />
          )}
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
          <Button buttonType="reset" buttonText="Reset" />
          <Button buttonType="submit" buttonText="Submit" />
        </div>
        <Footer />
      </form>
    </>
  );
}
