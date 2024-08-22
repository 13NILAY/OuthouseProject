import React, { useState } from "react";
import axios from "../../../../api/axios";

const AddSliders = () => {
  const [slider, setSlider] = useState({ name: "", description: "", image: "" });
  const [image, setImage] = useState(null);
  const [sliderSubmitted, setSliderSubmitted] = useState(false);

  // Handle input change for name and description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSlider({
      ...slider,
      [name]: value,
    });
  };

  // Handle file change for image
  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Store the image file temporarily
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello");
    console.log(image);
    // if (!image) {
    //   console.log("Please upload an image");
    //   return;
    // }

    const formData2 = new FormData();
    formData2.append("photo", image);

    try {
      console.log(formData2);
      const imageUploadResponse = await fetch("https://outhouseproject.onrender.com/admin/addSingleImage", {
        method: "POST",
        body: formData2,
        credentials:"include"
      });
      console.log(imageUploadResponse);

      if (imageUploadResponse) {
        const data = await imageUploadResponse.json();
        console.log(data);
        // Update the slider image URL
        const newSlider = { ...slider, image: data.fileUrl };

        // Submit the slider data to the backend
        const sliderResponse = await axios.post("/admin/addSlider", { sliders: [newSlider] }, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (sliderResponse.status === 201) {
          console.log("Slider added successfully");
          setSliderSubmitted(true); // Set flag to true to allow adding another slider
        }
      } else {
        console.log("Error uploading image:", imageUploadResponse.statusText);
      }
    } catch (error) {
      console.log("Error uploading image or adding slider:", error);
    }
  };

  // Reset form to allow adding another slider
  const resetForm = () => {
    setSlider({ name: "", description: "", image: "" });
    setImage(null);
    setSliderSubmitted(false);
  };

  return (
    <div className="mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10 font-texts">
      <h1 className="text-4xl font-bold mb-6 text-center">Add New Slider</h1>
      <div className="w-full max-w-2xl mx-auto bg-slate-50 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">
              Slider Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={slider.name}
              onChange={handleInputChange}
              className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
            />

            <label className="block text-lg font-semibold mb-2 mt-4" htmlFor="description">
              Slider Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={slider.description}
              onChange={handleInputChange}
              rows="4"
              className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
            />

            <label className="block text-lg font-semibold mb-2 mt-4" htmlFor="image">
              Slider Image:
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-800">
              Submit
            </button>
          </div>
        </form>

        {sliderSubmitted && (
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={resetForm}
              className="bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-800"
            >
              Add Another Slider
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSliders;
