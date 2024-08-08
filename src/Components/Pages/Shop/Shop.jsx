import React, { useState } from 'react'
import ShopHeader from './ShopHeader'
import ProductSection from './ProductSection'
import ScrollToTop from '../../../ScrollToTop'


const Shop = () => {
  return (
    <>
      <ScrollToTop/>
      <ShopHeader/>
      <ProductSection/>
    </>
    
  )
}

export default Shop

/*
<div className={`h-screen w-1/4 fixed top-0 ${filterBar?'right-0':'-right-1/3'} duration-700 ease-in-out z-50`}>
          <Filters/>
      </div>

<div className='w-full bg-background h-screen px-10 shadow-lg shadow-black'>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-xl font-texts text-typography font-semibold'>By Price<span className='text-sm font-normal '>( in ₹ )</span> :</p>
                    {
                      priceFilter.map((price)=>(
                        <div className='flex justify-start items-center px-5'>
                          <input type='checkbox' name='price_filter'/>
                          <label className='text-lg font-texts text-typography px-2 font-semibold'>{price}</label>
                        </div>    
                      ))
                    }
                </div>
            </div>





*/
