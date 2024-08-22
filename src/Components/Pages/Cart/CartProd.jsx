import React ,{useState} from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from 'react-redux'
import axios from '../../../api/axios'
import { useNavigate } from 'react-router-dom';
import { updateQuantity,deleteFromCart } from '../../../features/cart/cartSlice'

const CartProd = ({product,quantity,selectedSize,_id,onDelete}) => {
    const dispatch =useDispatch();
    const navigate=useNavigate();
    const [selectedQuantity,setSelectedQuantity] =useState(quantity ||1);
    
    // const handleQuantityChange = (event) => {
    //     setSelectedQuantity(event.target.value);
    //     let quantity=event.target.value;
    //     dispatch(updateQuantity({quantity,_id}))
    // };
    const handleDelete = () => {
        onDelete({_id, size:selectedSize});
      };
  return (
    <>
        <div className='flex items-center relative border border-typography rounded-sm px-2 py-4 my-3 md:max-[940px]:flex-col md:max-[940px]:items-start max-[940px]:px-4 max-mobileM:flex-col max-mobileM:items-start'>
            <img src={product.frontPicture} className='w-2/5 max-mobileL:w-1/2 px-4'/>
            <div className='flex flex-col justify-center items-start max-md:justify-center max-mobileL:my-4'>
                {/* PRODUCT INFORMATION */}
                <p className='font-semibold text-2xl max-sm:text-lg font-texts'>{product.name}</p>
                <p className='text-xl max-sm:text-base text-typography font-headings font-semibold'>₹ {product.cost.value}</p>
                <p className='text-lg max-sm:text-base text-typography font-texts font-bold'>Size: {selectedSize}</p>
                <p className='text-lg max-sm:text-base text-typography font-texts font-bold'>Quantity : {quantity}</p>
                {/* <div className=' font-texts font-semibold'>
                    <label className='text-base '>Quantity:</label> 
                     <select 
                        className='outline-none border border-typography p-1 mx-1 rounded-sm bg-none cursor-pointer'
                        value={selectedQuantity}
                        onChange={handleQuantityChange}
                        >
                        {[...Array(10).keys()].map(num => (
                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                        ))}
                    </select>
                </div>   */}
            </div>
            <button onClick={handleDelete} className=' absolute top-2 right-2 hover:cursor-pointer'>
                <DeleteOutlineOutlinedIcon/>
            </button>
        </div>
    </>
  )
}

export default CartProd