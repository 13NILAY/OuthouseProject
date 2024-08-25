import React, { useState,useEffect } from 'react'
import ScrollToTop from '../../../ScrollToTop'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CartProd from './CartProd'
import { deleteProductFromCart } from '../../../features/cart/cartSlice'
import { deleteFromCart,fetchCart,updateQuantity } from '../../../features/cart/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
import axios from '../../../api/axios'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'

const Cart = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const location=useLocation();
  const axiosPrivate=useAxiosPrivate();
  const [checkout,setCheckout] =useState(false);
  const cart = useSelector((state) => state.cart);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [totalCost, setTotalCost] = useState(0);
 
  useEffect(()=>{
    const fetchCartItems=async()=>{
      try {
        // const options={
        //   url:,
        //   method:'GET',
        //   withCredentials:true
        // }
        const result = await axiosPrivate.get('/users/viewMyCart/nilay1030@gmail.com');
        console.log(result.data.cart);
        if (result.data.cart && result.data.cart.length > 0) {
          dispatch(fetchCart(result.data.cart));
          setIsCartEmpty(false);
        } else {
          setIsCartEmpty(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCartItems();
  }, [dispatch]);

  useEffect(() => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.product.cost.value * prod.quantity;
    });
    setTotalCost(total);
  }, [cart]);
    
  const handleDelete = ({_id, size}) => {
    console.log(_id);
    console.log(size);
    dispatch(deleteProductFromCart({ _id, size },axiosPrivate));
  };

  const handleConfirmAddress=()=>{
    navigate('/account/address',{state: {from :location},replace: true});
  }
  const handleChechOut= async()=>{
    try {
      const orderUrl = "/order/create-order";
      const orderData = await axiosPrivate.post(orderUrl, {
          amount: amount,
          currency: "INR",
      });

      const options = {
          key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
          amount: orderData.data.amount,
          currency: orderData.data.currency,
          name: "Your Company Name",
          description: "Test Transaction",
          order_id: orderData.data.id,
          handler: (response) => {
              alert("Payment successful!");
              console.log(response);
          },
          prefill: {
              name: "John Doe",
              email: "john.doe@example.com",
              contact: "9999999999",
          },
          notes: {
              address: "Some Address",
          },
          theme: {
              color: "#F37254",
          },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
  } catch (error) {
      console.error("Payment error", error);
  }
  }
  return (
    <>
        <ScrollToTop/>  
        <div className='mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10'>
          <div className='flex items-center justify-center align-middle text-5xl font-headings mb-10'>Shopping Bag</div>
          {
            isCartEmpty &&
            (
              <div className='text-4xl font-semibold font-texts text-typography flex flex-col justify-center items-center w-full h-full my-12'>
                    <p>Your Shopping Bag is Empty.</p>
                    <p className='text-xl font-texts'>Any items added to the bag will be visible here</p>
                    <Link to="/shop" className='flex justify-center items-center mt-3'>
                        <button className='bg-primary h-12 text-background text-2xl px-8 py-2 rounded-sm border border-typography my-3'> Continue Shopping</button>
                    </Link>
                </div>
            )
          }
          {
            !isCartEmpty &&
            (
              <>
                <div className='flex justify-between items-start max-md:flex-col'>
                  {/* ----------- SHOPPING CART------------ */}
                  <div className='w-3/5 max-[940px]:w-1/2 max-md:w-4/5 max-sm:w-full'>
                    
                    {cart.map((prod)=>(
                      <CartProd 
                        key={prod._id} 
                        _id={prod._id} 
                        product={prod.product} 
                        selectedSize={prod.selectedSize} 
                        quantity={prod.quantity}
                        onDelete={handleDelete}
                      />
                    ))}
                  </div>

                    {/* ----------- SUBTOTAL SECTION ------------- */}
                    <div className='w-1/2 max-md:w-4/5 max-sm:w-full my-3 md:ml-6 border border-typography p-6 rounded-sm'>
                      {/* COUPON DISCOUNT SECTION */}
                      <div className='border-b-[1px] border-gray-300 pb-2'>
                        <div className=' flex items-center'>
                          <p className=' text-base font-semibold font-headings mr-2'>Coupon: </p>
                          <input type='text' className='outline-none border border-typography p-2 rounded-sm w-full' placeholder='Enter coupon code'/>
                        </div>
                        <button className='w-full p-2 text-base font-semibold font-texts bg-pr my-3 rounded-sm text-background border border-typography'>Apply Coupon</button>
                      </div>

                      {/* PRICE SECTION */}
                      <div className='text-base font-texts text-typography my-4 border-b-[1px] border-gray-300 pb-3'>
                        {cart.map((prod,index)=>(
                          <div key={index} className='flex justify-between items-center'>
                            <p>Product {index+1} :</p>
                            <p className='text-black font-semibold'>₹ {prod.product.cost.value}</p>
                          </div>
                        ))}
                        <div className='flex justify-between items-center'>
                          <p>Delivery Charge:</p>
                          <p className='text-black font-semibold'>₹149</p>
                        </div>
                        <div className='flex justify-between items-center'>
                          <p>Discount:</p>
                          <p className='text-red-600 font-semibold'>-₹300</p>
                        </div> 
                      </div>
                      <div className='flex justify-between items-center font-bold text-lg font-texts'>
                        <p>Total:</p>
                        <p>₹ {totalCost}</p>
                      </div>
                      <button onClick={handleConfirmAddress} className='text-lg font-texts font-semibold w-full p-2 bg-primary text-background mt-4 rounded-sm border border-typography'>Confirm Your Address</button>
                      <button className='text-lg font-texts font-semibold w-full p-2 bg-primary text-background mt-4 rounded-sm border border-typography' >
                        CheckOut
                      </button>
                    </div>
                </div>
              </>
          )}
      </div>
    </>
    
  )
}

export default Cart