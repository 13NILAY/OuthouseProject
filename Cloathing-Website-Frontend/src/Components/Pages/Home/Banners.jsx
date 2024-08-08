import React from 'react'
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'

const Banners = () => {
  return (
    <>
        <div className='px-sectionPadding max-md:px-mobileScreenPadding flex max-sm:flex-col justify-between items-center w-full mt-10'>
            <div className='w-1/2 max-sm:w-full max-sm:my-3  bg-[url("/src/assets/banner1.jpg")] h-80 sm:mr-3 bg-cover text-white font-semibold p-4'>
                <p className='lg:text-6xl'>spring/summer</p>
                <p className='text-4xl'>upcoming season</p>
                <p className='text-2xl'>The best classic dress is on sale</p>
            </div>
            <div className='w-1/2  max-sm:w-full max-sm:my-3 bg-[url("/src/assets/banner2.jpg")] h-80 sm:ml-3 bg-cover text-white font-semibold p-4'>
                <p className='lg:text-6xl'>spring/summer</p>
                <p className='text-4xl'>upcoming season</p>
                <p className='text-2xl'>The best classic dress is on sale</p>
            </div>
        </div>
    </>
  )
}


export default Banners