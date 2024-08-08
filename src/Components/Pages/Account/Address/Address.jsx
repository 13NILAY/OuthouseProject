import React,{useEffect,useState} from 'react'
import axios from '../../../../api/axios'
import {Link,useLocation,useNavigate} from 'react-router-dom';

const Address = () => {
  const navigate =useNavigate();
  const location =useLocation();
  
  const from =location.state?.from?.pathname || "/";
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        mobileno:'',
        addressOf: "",
        flatNumber: "",
        building: "",
        street: "",
        city: "",
        state: "",
        pinCode:0
      });
      useEffect(()=>{
        const fetchUser =async()=>{
          try{
            const result=await axios.get("/users/nilay1030@gmail.com");
            console.log(result.data);
            setFormData(result.data);
          }catch(err){
            console.log(err);
          }
        }
        fetchUser();
      },[])
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit =async (event) =>{
        console.log(formData)
        event.preventDefault();
        try{
            const response=await axios.put("/users/nilay1030@gmail.com",
                JSON.stringify({formData}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }      
            );
            console.log(response);

        }catch(err){
            console.log(err);
        }
        navigate(from,{replace:true})
      }
  return (
    <div className='mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10 font-texts text-typography'>
        <div className='w-full mb-10'>
        <p className='text-base text-black/70 border-b-2'>Address Details</p>
        {/* NAME */}
        <form onSubmit={handleSubmit}>
        <div className='flex justify-between items-center max-sm:w-full max-sm:flex-col my-5'>
            
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
            <label className='text-xl font-semibold mr-1' htmlFor='FirstName'>
                First Name:
            </label>
            <input
                id="FirstName" 
                className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' 
                type='text'
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
            />
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
            <label className='text-xl font-semibold mr-1' htmlFor='LastName'>
                Last Name:
            </label>
            <input 
                id="LastName"
                className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' 
                type='text'
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
            />
          </div>
        </div>
        {/*PHONE NUMBER */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
        <label className='text-xl font-semibold mr-1' htmlFor='PhoneNumber'>
            Phone Number:
        </label>
        <input 
            id="PhoneNumber" 
            className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' 
            type='number'
            name="mobileno"
            value={formData.mobileno}
            onChange={handleChange}
        />
        </div>
        {/* ADDRESS OF  */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
        <label className='text-xl font-semibold mr-1' htmlFor='AddressOf'>
            Address of: 
        </label>
        <input 
            id='AddressOf'
            className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' 
            type='text'
            name="addressOf"
            value={formData.addressOf}
            onChange={handleChange}
        />
        </div>
        {/*HOUSE NAME AND FLAT NO */}
        <div className='flex justify-between items-center max-sm:w-full max-sm:flex-col my-5'>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
            <label className='text-xl font-semibold mr-1' htmlFor='FlatNumber'>
                Flat number:
            </label>
            <input
                id='FlatNumber'
                className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' 
                type='text'
                name="flatNumber"
                value={formData.flatNumber}
                onChange={handleChange}    
            />
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
            <label className='text-xl font-semibold mr-1' htmlFor='BuildingName'>
                Building name/number:
            </label>
            <input 
                id='BuildingName'
                className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' 
                type='text'
                name="building"
                value={formData.building}
                onChange={handleChange}
            />
          </div>
        </div>
        {/* STREET  */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
            <label className='text-xl font-semibold mr-1' htmlFor='Street'>
                Street: 
            </label>
            <input 
                id='Street'
                className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' 
                type='text'
                name="street"
                value={formData.street}
                onChange={handleChange}
            />
        </div>
        {/* TOWN AND CITY */}
        <div className='flex justify-between items-center max-sm:w-full max-sm:flex-col my-5'>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
                <label className='text-xl font-semibold mr-1' htmlFor='State'>
                    State
                </label>
                <input 
                    id='State'
                    className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' 
                    type='text'
                    name="state"
                    value={formData.state}
                    onChange={handleChange}    
                />
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
                <label className='text-xl font-semibold mr-1' htmlFor='City'>
                    City:
                </label>
                <input 
                    id='City'
                    className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' 
                    type='text'
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <label className='text-xl font-semibold mr-1' htmlFor='PinCode'>
                PIN CODE: 
              </label>
              <input
                id='PinCode' 
                className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' 
                type='number'
                name='pinCode'
                value={formData.pinCode}
                onChange={handleChange}
              />
          </div>
        </div>
        {/* STATE AND COUNTRY  */}
        {/* <div className='flex justify-between items-center max-sm:w-full max-sm:flex-col my-5'>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>Flat number:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>Building name:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
        </div> */}
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

export default Address