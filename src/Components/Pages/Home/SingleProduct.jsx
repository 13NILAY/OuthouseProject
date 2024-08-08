import React from 'react'
import trial1 from '../../../assets/trial1.jpg'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'
const SingleProduct = ({products}) => {
  return (
    <>
        <Link to={`/shop/${products._id}`} className='flex flex-col items-start justify-start rounded-lg border border-typography p-3 my-5 text-typography shadow-sm shadow-gray-600'>
            <div className='bg-gray-200 rounded-lg'>
                <img src={products.picture} className='h-full'/>
            </div>
            <div className='mx-1 mt-4'>
                  <p className='font-semibold text-xl font-texts'>{products.name}</p>
                  <p className='text-lg text-typography font-headings font-semibold'>₹ {products.cost.value}</p>
                  <div className='flex text-[#fbb523] '>
                    <StarIcon style={{fontSize:"large"}}/>
                    <StarIcon style={{fontSize:"large"}}/>
                    <StarIcon style={{fontSize:"large"}}/>
                    <StarIcon style={{fontSize:"large"}}/>
                    <StarIcon style={{fontSize:"large"}}/>
                  </div>
                </div>
        </Link>
    </>
  )
}

export default SingleProduct