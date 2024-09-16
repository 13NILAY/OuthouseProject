import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layouts = () => {
  return (
    <main className='bg-[#F4E1D2] w-full flex flex-col '>
      {/* Header Component */}
      <Header />

      {/* Content Outlet */}
      
        <Outlet />
      
      {/* Footer Component */}
      <Footer />
    </main>
  );
};

export default Layouts;
