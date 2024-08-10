import React, { useState,useEffect ,useRef } from "react";
import axios from "../../../../api/axios";
import { Link,useNavigate } from 'react-router-dom';

const AddProducts = () => {
  const navigate=useNavigate();
  const [image, setImage]=useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    sizes: [""],
    currency: "INR",
    value: "",
    picture: "",
    colors: [""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleFileChange = (e) => {
    setImage( e.target.files[0] );
  };

  const handleArrayChange = (e, index, field) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const handleSubmit=async (event)=>{
    event.preventDefault();
    const formData1 =new FormData();
    formData1.append("photo",image);

    try{
      const upload =await fetch("https://outhouseproject.onrender.com/admin/addProductImages",{
        method:"POST",
        body:formData1
      });
      const result= await upload.json();
      console.log(result);
      setFormData({...formData,'picture':result.fileUrl});
      try{
        const add=await axios.post("/admin/addProduct",
          JSON.stringify({formData,picture:result.fileUrl}),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
        );
        if(add.status==201){
          navigate("/shop")
        }
      }catch(err){
        console.log(err);
      }

    }catch(error){
      console.log(error);
    }

    
      
    

  }

  return (
    <div className="mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10 font-texts ">
      <h1 className="text-4xl font-bold mb-6 text-center ">
        Add a New Product
      </h1>
      <div className="w-full max-w-2xl mx-auto bg-slate-50 p-8 rounded-lg shadow-lg">
        {/* Product Image */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="picture">
              Product Image:
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

          {/* Product Category */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="category">
              Product Category:
            </label>
            <input
              className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          {/* Product Sizes */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 " htmlFor="sizes">
              Product Sizes:
            </label>
            {formData.sizes.map((size, index) => (
              <div key={index} className="flex items-center w-full mb-2">
                <input
                  className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  id="sizes"
                  value={size}
                  onChange={(e) => handleArrayChange(e, index, "sizes")}
                />
                {index === formData.sizes.length - 1 && (
                  <button
                    type="button"
                    onClick={() => addArrayField("sizes")}
                    className="ml-2  bg-green-700 text-white px-2 py-1 rounded"
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
            <label
              className="block text-lg font-semibold mb-2"
              htmlFor="description"
            >
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
                    className="ml-2  bg-green-700 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button type="submit" className=" bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
