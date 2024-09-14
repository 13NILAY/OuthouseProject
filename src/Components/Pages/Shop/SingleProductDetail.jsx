import React, { useEffect, useState } from 'react';
import ScrollToTop from '../../../ScrollToTop.jsx';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios.jsx';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate.jsx';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../features/cart/cartSlice.jsx';

const SingleProductDetail = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();  // State to handle selected color
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`product/viewProduct/${_id}`);
        setProduct(response.data.data);
        console.log(response);
      } catch (err) {
        console.log("Error fetching Product:", err);
      }
    };
    fetchProduct();
  }, [_id]);

  const sizes = product?.size;
  const colors = product?.color;  // Assuming colors are stored in product.colors

  const increment = () => {
    if (quantity < 15) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAdd = () => {
    dispatch(addProductToCart({ product, quantity, selectedSize, selectedColor }, axiosPrivate));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <>
     <ScrollToTop />
<div className='w-full mt-20 px-4 max-md:px-2 pt-8 max-md:pt-4' style={{ backgroundColor: '#F4E1D2' }}>
  <div className='flex flex-col lg:flex-row justify-between w-full'>
    
    {/* IMAGES SECTION */}
    <div className='lg:w-1/2 w-full flex flex-col items-start mb-8 lg:mb-0'>
      {/* Main Image */}
      <div className='w-full bg-[#D4B79A] border border-[#8A5D3B] shadow-md rounded-lg overflow-hidden'>
        <img
          src={product.frontPicture}
          alt={product.name}
          className='w-full h-auto object-cover rounded-lg'
        />
      </div>
      
      {/* Additional Images */}
      <div className='grid grid-cols-3 gap-4 my-4 w-full'>
        {product.picture?.map((pic, index) => (
          <div className='w-full bg-white border border-[#8A5D3B] shadow-sm rounded-md overflow-hidden' key={index}>
            <img
              src={pic}
              alt={`Additional view ${index + 1}`}
              className='w-full h-auto object-cover rounded-md'
            />
          </div>
        ))}
      </div>
    </div>

    {/* PRODUCT DETAILS SECTION */}
    <div className='lg:w-2/5 w-full flex flex-col items-start justify-center p-6 border border-[#8A5D3B] shadow-md rounded-lg bg-[#F4E1D2]'>
      
      {/* Product Name */}
      <p className='text-3xl lg:text-4xl font-semibold font-headings text-[#3c2a21] mb-3'>{product.name}</p>
      
      {/* Product Price */}
      <p className='text-2xl lg:text-3xl font-semibold font-headings my-2 text-[#8A5D3B]'>₹ {product.cost.value}</p>
      
      {/* Product Description */}
      <p className='text-base lg:text-lg font-medium font-texts text-[#4b3621] mb-6'>
        {product.description}
      </p>

      {/* SIZES SECTION */}
      <div className='w-full mb-6'>
        <p className='font-texts font-semibold text-xl text-[#3c2a21] mb-3'>Sizes:</p>
        <div className='grid grid-cols-4 gap-3'>
          {sizes.map((size, index) => (
            <div
              key={index}
              className={`flex justify-center items-center border p-2 cursor-pointer duration-200 ease-in-out rounded-md shadow-sm ${
                selectedSize === size ? 'border-[#8A5D3B] bg-[#8A5D3B] text-[#F4E1D2]' : 'border-[#D4B79A] text-[#3c2a21]'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              <p className='font-texts font-semibold text-lg'>{size}</p>
            </div>
          ))}
        </div>
      </div>

      {/* COLORS SECTION */}
      {colors && (
        <div className='w-full mb-6'>
          <p className='font-texts font-semibold text-xl text-[#3c2a21] mb-3'>Colors:</p>
          <div className='flex flex-wrap gap-3'>
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all duration-300 ease-in-out ${
                  selectedColor === color.colorCode
                    ? 'border-[#a24a07] border-4 shadow-md'
                    : 'border-transparent'
                }`}
                style={{ backgroundColor: color.colorCode }}
                onClick={() => setSelectedColor(color.colorCode)}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* QUANTITY SECTION */}
      <div className='w-full flex items-center mb-6'>
        <p className='text-xl lg:text-2xl font-texts font-semibold text-[#3c2a21] mr-3'>Quantity:</p>
        <div className='flex text-xl lg:text-2xl font-texts font-semibold border border-[#8A5D3B] rounded-lg shadow-sm'>
          <button className='px-4 py-1' onClick={decrement}>-</button>
          <p className='px-4 border-x-[1px] border-[#8A5D3B] py-1'>{quantity}</p>
          <button className='px-4 py-1' onClick={increment}>+</button>
        </div>
      </div>

      {/* ADD TO CART BUTTON */}
      <div className='w-full text-xl lg:text-2xl font-semibold font-texts flex items-center justify-center'>
        <button
          className='px-5 py-3 text-lg font-texts font-semibold bg-[#8A5D3B] text-[#F4E1D2] rounded-md border border-[#6B4F3A] shadow-md hover:bg-[#6B4F3A] w-full'
          onClick={handleAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default SingleProductDetail;
