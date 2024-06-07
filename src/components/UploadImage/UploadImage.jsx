import { useState } from "react";
import "./UploadImage.scss";
import axios from "axios";

const UploadImage = ({ formData, setFormData, image, setImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgsrc, setImgsrc] = useState(null);

  return (
    <div>
      {/* Conditionally render the selected image if it exists */}
      {selectedImage && (
        <div>
          <img
            className="upload-img__img"
            alt="your uploaded pet image"
            width={"250px"}
            src={imgsrc}
          />
          <br /> <br />
          {/* Button to remove the selected image (after displaying image)*/}
          <button type="button"
            className="upload-img__rm-btn"
            onClick={() => {
              setSelectedImage(null);
              setImgsrc(null);
            }}
          >
            Remove
          </button>
          {/* <button type="button"
            className="upload-img__rm-btn"
            onClick={() => {
              console.log(image);
            }}
          >
            Confirm
          </button> */}
        </div>
      )}

      <br />
      <input
        type="file"
        name="pet_image"
        onChange={async (event) => {
          console.log(event.target.files[0]); // Log the selected file
          console.log(event.target.files[0].name); // example.jpg
          setSelectedImage(event.target.files[0]);
          setImgsrc(URL.createObjectURL(event.target.files[0]));
          setImage(event.target.files[0].name);

          let formData = new FormData();
          formData.append("file", event.target.files[0]);
          // console.log(formData);

          try {
            const response = await axios.post(
              `${import.meta.env.VITE_BASE_URL}upload`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            // console.log(formData);
          } catch (err) {
            console.error(`Error uploading file: ${err}`);
          }
        }}
      />
    </div>
  );
};

export default UploadImage;
