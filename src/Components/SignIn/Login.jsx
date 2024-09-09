import React from 'react'
import { useState,useEffect } from 'react'
import { Link ,useNavigate ,useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from '../../api/axios'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const Login = () => {
    const {setAuthInfo ,persist ,setPersist} =useAuth();
    const axiosPrivate=useAxiosPrivate();
    const navigate =useNavigate();
    const location =useLocation();
    const from =location.state?.from?.pathname || "/";

    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
    const [errMsg,setErrMsg]=useState('');
    
  
    useEffect(()=>{
        setErrMsg('');
    },[user,pwd]);

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const response=await axiosPrivate.post("/login",
                JSON.stringify({identity:user,password:pwd}),
                {
                    headers:{'Content-Type':'application/json'},
                    withCredentials: true
                }
            );
            console.log(response);
            const email=response?.data?.email; 
            const accessToken=response?.data?.accessToken;
            const roles=response?.data?.roles;

            setAuthInfo({accessToken},email,roles);
            setUser('');
            setPwd('');
            // navigate(from, {replace :true})
            navigate(from, {replace :true});

        }catch(err){
            if(!err?.response){
                setErrMsg("No Server Response");
            }else if(err.response?.status===400){
                setErrMsg("Missing Username or Password");
            }else if(err.response?.status===401){
                setErrMsg("Unauthorized");
            }else{
                setErrMsg("Login Failed");
            }
        }
        
    }

    const togglePersist =() =>{
        setPersist(prev =>!prev);
    }

    useEffect(()=>{
        localStorage.setItem("persist", persist);
    },[persist]);
  return (
    <div className='flex flex-col mx-3 font-texts my-5 ' >
        <p className={errMsg?"flex text-red-500 justify-center items-center":"hidden"} ><b>{errMsg} !!!</b></p>
        <form onSubmit={handleSubmit}>
        <div className=' flex flex-col justify-start w-full'>
            <label className='font-semibold my-2 text-lg' htmlFor='username'>
                Username / Email Id :
            </label>
            <input 
                type='text' 
                id='username' 
                autoComplete='off' 
                onChange={(e)=>setUser(e.target.value)} 
                value={user} 
                required 
                className='border border-typography outline-none h-8 px-2 py-5 rounded-sm'
            />
        </div>
        <div className=' flex flex-col justify-start w-full my-2'>
            <label className='font-semibold my-2 text-lg' htmlFor='password'>
                Password :
            </label>
            <input 
                type='password' 
                id='password'
                onChange={(e)=>setPwd(e.target.value)}
                value={pwd}
                required
                className='border border-typography outline-none h-8 px-2 py-5 rounded-sm'
            />
            <p className='text-typography text-[12px] hover:text-black hover:underline font-semibold mt-1 duration-200 ease-in-out '>Forgot Passowrd?</p>
        </div>
        <div className='mt-6 flex flex-col justify-center items-start'>
        <button type="submit" className=" bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-800">
              LOG IN
            </button>
            <div className='flex justify-center items-center '>
                <input 
                    type='checkbox'
                    id='persist'
                    onChange={togglePersist} 
                    checked={persist}  
                />
                <label htmlFor='persist' className='text-sm mx-2'> 
                    Remember me 
                </label>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Login