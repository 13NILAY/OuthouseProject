import React, { useCallback, useState } from 'react'
import Login from './Login'
import Register from './Register'
import {motion, AnimatePresence} from 'framer-motion'

const SignInPage = () => {
  
  const [login, setLogin]= useState(false)
  
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen w-full' >
        <div className='text-gray-400 w-2/5 font-headings flex flex-wrap items-center justify-around mb-8 '>
          <button className={`text-[2.7rem] ${login?'text-typography':''} duration-200 ease-in-out border-none outline-none`}
              onClick={()=>{setLogin(true)}}>
            Login</button>
          <div className='h-12 w-12 rounded-full border-4 border-gray-400 text-2xl font-bold font-texts flex justify-center items-center'>OR</div>
          <button className={`text-[2.7rem] ${!login?'text-typography':''} duration-200 ease-in-out border-none outline-none`}
              onClick={()=>{setLogin(false)}}>
            Register</button>
        </div>
        <AnimatePresence>
          <div className='bg-white w-2/5 border-typography border flex flex-col px-5 '>
            {
              /*FOR LOGIN PAGE */
              login &&
              (
                <motion.div initial={{ opacity:0}} animate={{ opacity:1}} exit={{ opacity:0}} transition={{duration:2, ease:[0.4, 0, 0.2, 1]}}>
                  <Login/>
                </motion.div>
                
              )
            }
            {
              !login &&
              (
                <motion.div initial={{ opacity:0}} animate={{ opacity:1}} exit={{ opacity:0}} transition={{duration:2, ease:[0.4, 0, 0.2, 1]}}>
                  <Register/>
                </motion.div>
                
              )
            }
          </div>
        </AnimatePresence>
        
      </div>
    </>
  )
}

export default SignInPage