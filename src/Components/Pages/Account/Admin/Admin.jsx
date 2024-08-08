import React from 'react'
import orders from '../../../../assets/Orders.jpg'
import addProd from '../../../../assets/addProduct.png'
import { Link } from 'react-router-dom'
const Admin = () => {
  return (
    <>
        <div className='mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-'>
            <div className='mt-10 text-typography font-texts font-semibold grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between my-10 gap-10'>
              <Link to='/account/admin/addProducts' className=' px-4 py-6 border border-typography  flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10 max-sm:w-3/4 max-[470px]:w-full'>
                <img src={addProd} className='h-28 max-mobileM:h-24 p-2 '/>
                <div className='h-full flex flex-col justify-center items-start py-6 '>
                   <p className='text-xl font-bold'>Add Products</p>
                  <p className='text-sm '>Add products to the shop</p>
                </div>
              </Link>
              <div className='  px-4 py-6 border border-typography  flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10 max-sm:w-3/4 max-[470px]:w-full'>
                <img src={orders} className='h-28 max-mobileM:h-24 p-2 '/>
                <div className='h-full flex flex-col justify-center items-start py-6 '>
                   <p className='text-xl font-bold'>Orders</p>
                  <p className='text-sm'>Check details about all orders recieved</p>
                </div>
              </div>


            </div>
        </div>
    </>
    
  )
}

export default Admin