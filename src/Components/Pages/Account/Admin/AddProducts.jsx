import React, { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const AddProducts = () => {
  const navigate = useNavigate();
  const axiosPrivate=useAxiosPrivate();
  const [images, setImages] = useState([]); // State to hold multiple images
  const [image,setImage] =useState(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categoryName: "",
    sizes: [""],
    currency: "INR",
    value: "",
    frontPicture:"",
    picture: "",
    colors: [""],
  });

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/Category/all");
        console.log(response.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSingleFileChange=(e)=>{
    // const selectedFile = e.target.files[0];
    
      setImage(e.target.files[0]);
    
  }
  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleArrayChange = (e, index, field) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Prepare FormData for the front image
      const formData2 = new FormData();
      formData2.append("photo", image);
  
      // Upload the front image
      const uploadFrontResponse = await axiosPrivate.post("/admin/addSingleImage", formData2, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      const frontImageUrl = uploadFrontResponse.data.fileUrl;
  
      // Prepare FormData for the other images
      const formData1 = new FormData();
      images.forEach((img) => {
        formData1.append("photos", img);
      });
  
      // Upload the other images
      const uploadImagesResponse = await axiosPrivate.post("/admin/addProductImages", formData1, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      const imageUrls = uploadImagesResponse.data.fileUrls;
      const finalFormData = {
        ...formData,
        frontPicture: frontImageUrl,
        picture: imageUrls,
      };
      try{
      const add = await axiosPrivate.post(
        "/admin/addProduct",
        JSON.stringify(finalFormData),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      if (add.status === 201) {
        navigate("/shop");
      }
    }catch(e){
      console.log("Error uploading product"+e);
    }
    } catch (error) {
      console.error("Error uploading Image:", error);
    }
  };

  return (
    <div className="mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10 font-texts ">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Add a New Product
      </h1>
      <div className="w-full max-w-2xl mx-auto bg-slate-50 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Product Image */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="FrontPicture">
              Product Image(Front):
            </label>
            <input
              id="FrontPicture"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              type="file"
              accept="image/*"
              // multiple
              onChange={handleSingleFileChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="picture">
              Product Images(Other):
            </label>
            <input
              id="picture"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
          </div>

          {/* Product Title */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">
              Product Title:
            </label>
            <input
              className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Product Category Dropdown */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="category">
              Product Category:
            </label>
            <select
              className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
              id="category"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
            >
              <option value="" disabled>Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.categoryName}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>

          {/* Product Sizes */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="sizes">
              Product Sizes:
            </label>
            {formData.sizes.map((size, index) => (
              <div key={index} className="flex items-center w-full mb-2">
                <input
                  className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  value={size}
                  onChange={(e) => handleArrayChange(e, index, "sizes")}
                />
                {index === formData.sizes.length - 1 && (
                  <button
                    type="button"
                    onClick={() => addArrayField("sizes")}
                    className="ml-2 bg-green-700 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Product Price */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="price">
              Product Price:
            </label>
            <div className="flex">
              <select
                className="block w-1/4 text-sm text-black border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="AUD">AUD</option>
              </select>
              <input
                className="block w-3/4 text-sm text-black border border-gray-300 rounded-r-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
                type="number"
                name="value"
                id="price"
                value={formData.value}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="description">
              Product Description:
            </label>
            <textarea
              rows="6"
              id="description"
              className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Product Colors */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="colors">
              Product Colors:
            </label>
            {formData.colors.map((color, index) => (
              <div key={index} className="flex items-center w-full mb-2">
                <input
                  className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  value={color}
                  id="colors"
                  onChange={(e) => handleArrayChange(e, index, "colors")}
                />
                {index === formData.colors.length - 1 && (
                  <button
                    type="button"
                    onClick={() => addArrayField("colors")}
                    className="ml-2 bg-green-700 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button type="submit" className="bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
