import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'                       
const Layouts = () => {
  return (
    <main className='bg-background w-full flex flex-col'>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layouts