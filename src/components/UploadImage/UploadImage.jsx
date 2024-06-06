import { useState } from "react";
import "./UploadImage.scss";

const UploadImage = ({formData, setFormData, imgsrc, setImgsrc}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  // const [imgsrc,setImgsrc]=useState(null)

  return (
    <div>
      {/* Conditionally render the selected image if it exists */}
      {selectedImage && (
        <div>
          <img className="upload-img__img"
            alt="your uploaded pet image"
            width={"250px"}
            src={imgsrc}
          />
          <br/> <br/>
          {/* Button to remove the selected image (after displaying image)*/}
          <button className="upload-img__rm-btn" onClick={() => {setSelectedImage(null); setImgsrc(null)}}>Remove</button>
        </div>
      )}

      <br/>
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]); // Log the selected file
          setSelectedImage(event.target.files[0]);// Update the state with the selected file
          setImgsrc(URL.createObjectURL(event.target.files[0]));

          // setFormData((prevState) => ({
          //   ...prevState,
          //   [name]: value,
          // }));
          const pet_image="pet_image"

          setFormData((prevState) => ({
            ...prevState,
            [pet_image]: imgsrc,
          }));


          // setFormData({...formData,pet_image:imgsrc})
          console.log(imgsrc);
          console.log(formData);
        }}
      />
    </div>
  );
};

export default UploadImage;
