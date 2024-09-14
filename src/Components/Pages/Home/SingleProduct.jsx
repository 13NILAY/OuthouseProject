import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const SingleProduct = ({ products }) => {
  return (
    <>
      <Link 
        to={`/shop/${products._id}`} 
        className='flex flex-col items-start justify-start rounded-lg border border-[#8A5D3B] p-4 my-5 text-[#3c2a21] shadow-md shadow-[#6B4F3A] transition duration-300 hover:shadow-lg hover:scale-105 bg-[#F4E1D2]'
      >
        {/* Image Section */}
        <div className='bg-[#D4B79A] rounded-lg overflow-hidden'>
          <img src={products.frontPicture} className='h-80 w-full object-cover rounded-lg' alt={products.name} />
        </div>

        {/* Product Details */}
        <div className='mx-1 mt-4'>
          <p className='font-semibold text-lg text-[#4b3621] font-texts'>{products.name}</p>
          <p className='text-xl text-[#5f4339] font-headings font-semibold mt-1'>₹ {products.cost.value}</p>

          {/* Star Ratings */}
          <div className='flex text-[#FBB523] mt-2'>
            <StarIcon style={{ fontSize: "large" }} />
            <StarIcon style={{ fontSize: "large" }} />
            <StarIcon style={{ fontSize: "large" }} />
            <StarIcon style={{ fontSize: "large" }} />
            <StarIcon style={{ fontSize: "large" }} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default SingleProduct;
