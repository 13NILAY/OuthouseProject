import React, { useState,useEffect ,useRef } from "react";
import axios from "../../../../api/axios";
import { Link,useNavigate } from 'react-router-dom';
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const AddCategory = () => {
    const navigate=useNavigate();
    const axiosPrivate=useAxiosPrivate();
    const [image, setImage]=useState(null);
    const [formData, setFormData] = useState({
        categoryName: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const add=await axiosPrivate.post("/admin/addCategory",
              JSON.stringify({formData}),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
            );
            console.log(add);
            if(add.status==201){
              navigate("/account/admin");
            }
          }catch(err){
            console.log(err);
          }
    }

  return (
    <div className="mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10 font-texts ">
      <h1 className="text-4xl font-bold mb-6 text-center ">
        Add a New Category 
      </h1>
      <div className="w-full max-w-2xl mx-auto bg-slate-50 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 text-center" htmlFor="name">
              Category Name :
            </label>
            <input
              className="block w-full text-sm text-black border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="name"
              name="categoryName"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className=" bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-800">
              Submit
            </button>
          </div>
        </form>
    </div>
</div>
  )
}

export default AddCategory