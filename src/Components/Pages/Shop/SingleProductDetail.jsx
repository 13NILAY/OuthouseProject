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
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`product/viewProduct/${_id}`);
        setProduct(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log("Error fetching Product:", err);
      }
    };
    fetchProduct();
  }, [_id]);

  const sizes = product?.size;

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
    dispatch(addProductToCart({ product, quantity, selectedSize }, axiosPrivate));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <ScrollToTop />
      <div className='w-full mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-sectionPadding max-md:pt-mobileScreenPadding'>
        <div className='flex justify-between w-full max-[930px]:flex-col'>
          {/* IMAGES */}
          <div className='w-2/3 max-[930px]:w-full flex flex-col items-start'>
            <div className='w-full bg-gray-200'>
              <img
                src={product.frontPicture}
                alt={product.name}
                className='w-full h-auto object-cover'
              />
            </div>
            <div className='grid grid-cols-3 gap-x-5 my-3 w-full'>
              {product.picture?.map((pic, index) => (
                <div className='w-full bg-white' key={index}>
                  <img
                    src={pic}
                    alt={`Additional view ${index + 1}`}
                    className='w-full h-auto object-cover'
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-start justify-center w-2/5 max-[930px]:w-full min-[930px]:ml-20'>
            <p className='text-5xl max-mobileL:text-3xl font-semibold font-texts'>{product.name}</p>
            <p className='text-3xl max-mobileL:text-xl font-semibold font-headings my-1'>₹ {product.cost.value}</p>
            <p className='text-base max-mobileL:text-sm font-semibold font-texts'>{product.description}</p>

            {/* SIZES SECTION */}
            <div className='w-full my-6'>
              <p className='font-texts font-semibold text-2xl mb-2'>Sizes:</p>
              <div className='grid grid-cols-4 gap-x-10 max-sm:gap-x-5 max-mobileL:gap-x-2 gap-y-3'>
                {sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`flex justify-center items-center border p-2 cursor-pointer duration-200 ease-linear ${selectedSize === size ? 'border-typography bg-primary text-background' : 'border-typography text-black'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <p className='font-texts font-semibold text-lg'>{size}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className='w-full flex items-center mb-5'>
              <p className='text-2xl font-texts font-semibold mr-3'>Quantity:</p>
              <div className='flex text-2xl font-texts font-semibold border border-typography rounded-sm'>
                <button className='px-3 py-1' onClick={decrement}>-</button>
                <p className='px-3 border-x-[1px] border-typography py-1'>{quantity}</p>
                <button className='px-3 py-1' onClick={increment}>+</button>
              </div>
            </div>
            <div className='w-full text-2xl font-semibold font-texts flex items-center justify-center text-background'>
              <button className='px-2 py-2 border border-typography rounded-sm bg-primary w-full' onClick={handleAdd}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetail;
