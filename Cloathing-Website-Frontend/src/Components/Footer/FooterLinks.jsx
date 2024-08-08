import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const FooterLinks = () => {
  return (
    <div className='border-t-[1px] border-typography px-sectionPadding max-sm:px-mobileScreenPadding py-16 flex flex-wrap justify-between max-[520px]:grid max-[520px]:grid-cols-2 max-[520px]:gap-y-8 items-center w-full'>
        <div className=' flex flex-col justify-center items-start w-1/3 max-[520px]:w-full'>
          <p className='font-headings text-base font-semibold text-typography mb-2'>Quick Links</p>
          <div className='font-texts text-sm font-semibold text-typography/70'>
          <Link to='/about'><p>About Us</p></Link>
          <Link><p>Privacy Policy</p></Link>
          <Link><p>Refund & Return</p></Link> 
          </div>
        </div>

        <div className=' flex flex-col justify-center items-start w-1/3 max-[520px]:w-full'>
          <p className='font-headings text-base font-semibold text-typography mb-2'>Help</p>
          <div className='font-texts text-sm font-semibold text-typography/70'>
            <p>Contact Us</p>
            <p>Customer Service</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div className=' flex flex-col justify-center items-start w-1/3 max-[520px]:w-full'>
          <p className='font-headings text-base font-semibold text-typography mb-2'>Socials</p>
          <div className='font-texts text-sm font-semibold text-typography/70'>
            <p><InstagramIcon fontSize='small'/> Instagram</p>
            <p><FacebookIcon fontSize='small'/> Facebook</p>
            <p><XIcon fontSize='small'/> Twitter</p>
          </div>
        </div>
      </div>
  )
}

export default FooterLinks