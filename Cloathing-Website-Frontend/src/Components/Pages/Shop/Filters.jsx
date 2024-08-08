import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close';


const Filters = ({changeSidebar}) => {
    const priceFilter= ["0 - 999 ", "1,000 - 2,499", "2,500 - 3,999", "3,999 and above"]
    return (
          <motion.div initial={{x:"-100%", opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.4}} exit={{x:"-35%", opacity:0}} className='w-1/3 max-lg:w-2/5 max-md:w-1/2 max-[520px]:w-2/3 max-mobileM:w-3/4 bg-background h-screen px-10 shadow-lg shadow-black'>
          <div className='top-5 right-5 absolute cursor-pointer' onClick={changeSidebar}>
            <CloseIcon/>
          </div>
          <p className='font-headings font-semibold text-2xl max-mobileL:text-xl text-black/85 pt-20'>FILTERS & SORT </p>
          <div className='flex flex-col justify-center items-start py-5'>
            <p className='text-xl max-mon font-texts text-typography font-semibold'>By Price<span className='text-sm font-normal '>( in ₹ )</span> :</p>
            {
              priceFilter.map((price)=>(
                <div className='flex justify-start items-center px-5 max-mobileL:px-2' key={priceFilter.indexOf(price)}>
                  <input type='checkbox' name='price_filter'/>
                <label className='text-lg max-mobileL:text-base font-texts text-typography px-2 font-semibold'>{price}</label>
              </div>    
              ))
            }
          </div>
        </motion.div>
    )
}

export default Filters