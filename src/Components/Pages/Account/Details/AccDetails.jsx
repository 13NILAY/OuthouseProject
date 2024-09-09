import React, { useState } from 'react'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const AccDetails = () => {
    //ACCOUNT DETAILS
    const[name, setName]=useState([])
    const[email, setEmail]=useState()
    const[newPassword, setNewPassword]=useState("")
    const[confirmPass, setConfirmPass]=useState("")

    //PASSWORD CHECKING STATES
    const[emptyPass,setEmptyPass]=useState(false)
    const[Verification, setVerification]=useState(true)
    const [passVisibilty, setPassVisibility]=useState(false)

    //FUNTIONS FOR PASSWORD VERIFICATION
    const setPassword=(e)=>{
      setNewPassword(e.target.value)
    }
    const confirmPassword=(e)=>{
      setConfirmPass(e.target.value)
    }
    const checkPassword=()=>{
      if(newPassword==='')
      {
        setEmptyPass(true)
      }
      else if(newPassword===confirmPass)
        setVerification(true)
      else
      {
        setVerification(false) 
        setNewPassword("")
        setConfirmPass("")
      }
    } 

  return (
    <div className='mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10 font-texts text-typography'>
      {/*PERSONAL DETAILS */}
      <div className='w-full mb-10'>
        <p className='text-base text-black/70 border-b-2'>Personal Details</p>
        {/* NAME */}
        <div className='flex justify-between items-center max-sm:w-full max-sm:flex-col my-5'>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>First Name:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>Last Name:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
        </div>
        {/*EMAIL ADDRESS */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
          <p className='text-xl font-semibold mr-1'>E-mail address:</p>
          <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' type='text'/>
        </div>
        {/*PHONE NUMBER */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
          <p className='text-xl font-semibold mr-1'>Phone Number:</p>
          <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' type='text'/>
        </div>
      </div>
      {/* CHANGE PASSWORD */}
      <div className='w-full my-10'>
        <p className='text-base text-black/70 border-b-2'>Change Password </p>
        {/* PASSWORD BOX */}
        <div className='flex flex-col justify-center items-start  my-5'>
          <p className='text-xl font-semibold w-full mr-1'>New Password: <span className='text-[12px]'>(Leave blank for unchanged)</span></p>
          <div className='border border-typography text-lg rounded flex items-center w-1/2 max-sm:w-full'>
            <input className='outline-none font-semibold p-1 rounded w-full' type={passVisibilty?'text':'password'}
            onChange={setPassword} value={newPassword}/>
            <div className={passVisibilty?'mx-2 cursor-pointer text-primary':'mx-2 cursor-pointer'
            } onClick={()=>setPassVisibility(prev=>!prev)}>
              {
                passVisibilty&&
                (
                  <VisibilityOffOutlinedIcon/>
                )
              }
              {
                !passVisibilty &&
                (
                  <VisibilityOutlinedIcon/>
                )
              }
            </div>
          </div>
          {
              emptyPass&&
              <div className='text-sm text-red-500'>
                <p>Password should not be empty</p>
            </div>
          }
        </div>
        {/*CONFIRM PASSWORD BOX */}
        <div className='flex flex-col justify-center items-start  my-5'>
          <p className='text-xl font-semibold mr-1'>Confirm New Password:</p>
          <div className='border border-typography text-lg w-1/2 max-sm:w-full rounded flex items-center'>
            <input className='outline-none font-semibold p-1 rounded w-full' type='password' 
            onChange={confirmPassword} value={confirmPass}/>
          </div>
          {
            !Verification &&
            <div className='text-sm text-red-500'>
              <p>Password and Confirmed Password should be the same</p>
            </div>
          }
        </div>
        
        <div className='my-5 font-semibold border border-typography rounded-sm w-1/4 max-md:w-2/5 max-sm:w-full text-lg text-center p-2 bg-primary text-background cursor-pointer'>
          <button onClick={checkPassword} className=" bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-800">SAVE CHANGES</button>
          
        </div>
        {/*------------------------------------ */}
      </div>
    </div>
  )
}

export default AccDetails