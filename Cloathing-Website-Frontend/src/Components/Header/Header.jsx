import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  const[ sidebar, setSidebar]=useState(false)
  
  const changeSize=()=>{
    if(screen.width>=768)
      setSidebar(false)
  }
  useEffect(()=>{
    changeSize()
  }, [screen.width])
  return (
    <>
      <div className='h-20 w-full shadow-sm shadow-[#444444] z-50 fixed top-0 left-0 font-texts flex justify-between items-center px-sectionPadding max-md:px-mobileScreenPadding bg-background'>
        {/* FOR LARGE SCREEN DEVICES */}
        <nav className='flex justify-between items-center w-full'>   
          {/* -----------FOR LOGO-------------  */}
          <div className='text-lg flex justify-start'>
            <Link to='/'>HELLO WORLD</Link>
          </div>

          {/* -----------FOR WEBSITE LINKS------------ */}
          <ul className='flex justify-between items-center font-semibold text-lg w-2/5 max-md:w-1/4 max-mobileL:w-2/5'  >
            {/* ======== ADD LINK LOCATIONS TO THE NAVLINKS AND CHANGE COLOUR ======*/}
            <li className='max-md:hidden'>
              <NavLink to='/' className={({isActive})=>`relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${isActive?'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0':'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'}`}>
                Home
              </NavLink>
            </li>
            <li className='max-md:hidden'>
              <NavLink to='/shop' className={({isActive})=>`relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${isActive?'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0':'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'}`}>
                Shop
              </NavLink>
            </li>
            <li className='max-md:hidden'>
              <NavLink to='/about' className={({isActive})=>`relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${isActive?'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0':'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'}`}>
                About
              </NavLink>
            </li> 
            <li>
              <NavLink to='/cart' className={({isActive})=>`transition duration-300 hover:text-primary ${isActive? 'text-primary':''} `}>
                <ShoppingBagOutlinedIcon/>
              </NavLink>
            </li>
            <li>
              <NavLink to='/account' className={({isActive})=>`transition duration-300 hover:text-primary ${isActive? 'text-primary':''}`}>
                <AccountCircleOutlinedIcon/>
              </NavLink>
            </li>
            <div className='md:hidden'
            onClick={()=>{ setSidebar(true) }}>
              <MenuIcon/>
            </div>
          </ul>
        </nav>
        {
          /* FOR SMALL SCREEN DEVICES, THE SIDEBAR IS USED */
          sidebar &&
          (
            <>
              <div className='w-full h-screen fixed top-0 right-0 bg-background/50'
              onClick={()=>{  setSidebar(false) }}>
                <div className='w-1/2 h-screen fixed top-0 right-0 shadow-md shadow-black bg-background'>
                  <div className='text-black m-4 absolute left-0' 
                    onClick={()=>{ setSidebar(false) }}>
                      <CloseIcon/>
                  </div>
                  <nav className='flex flex-col justify-start items-start font-semibold'>
                    <ul className='mx-4 my-20 text-lg'>
                      <li className='my-3'>
                        <NavLink to='/' className={({isActive})=>`relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${isActive?'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0':'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'}`}> 
                          Home
                        </NavLink>
                      </li>
                      <li className='my-3'>
                        <NavLink to='/shop' className={({isActive})=>`relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${isActive?'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0':'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'}`}>
                          Shop
                        </NavLink>
                      </li>
                      <li className='my-3'>
                        <NavLink to='/about' className={({isActive})=>`relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${isActive?'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0':'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'}`}>
                          About
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default Header
