import React, { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import Filters from './Filters';
import { AnimatePresence, motion } from 'framer-motion';

const ShopHeader = () => {
const [filterBar, setFilterBar] = useState(false)
  
  const changeSidebar=()=>
  {
    setFilterBar(!filterBar)
  }
  return (
    <div className='mt-20 px-sectionPadding max-md:px-mobileScreenPadding '>
        {/* SEARCH BAR AND FILTERS */}
        <div className='flex justify-between items-center max-sm:flex-col max-sm:items-start py-3 text-typography mt-5'>
          <div className='flex justify-start items-center cursor-pointer border border-typography py-2 px-4 rounded-md max-sm:my-4' 
              onClick={changeSidebar}>
              <p className='font-semibold font-texts text-xl'>Filters</p>
              <TuneIcon/>
          </div>
          <div className='font-texts rounded-md w-1/3 max-sm:w-3/4 max-mobileL:w-full border border-typography flex justify-between items-center'>
              <input type="text" placeholder='search shop...' className='border-none outline-none rounded-l-md py-2 pr-6 w-[85%] pl-1'/>
              <div className='cursor-pointer px-2'>
                <SearchIcon />
              </div>
              
          </div>
        </div>
        {/* SIDEBAR FOR FILTERS */}
        <AnimatePresence>
        {
        filterBar && 
        <div className={`w-screen bg-black/50 h-screen fixed top-0 right-0 z-50`} onClick={changeSidebar}>
            <motion.div exit={{x:"-35%", opacity:0}} transition={{duration:0.2}}>
              <Filters changeSidebar={changeSidebar} filterBar={filterBar}/> 
            </motion.div>   
        </div>
        }
        </AnimatePresence>
  </div>
  )
}

export default ShopHeader