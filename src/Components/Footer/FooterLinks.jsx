import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const FooterLinks = () => {
  return (
    <footer className="border-t-[1px] border-typography px-sectionPadding max-sm:px-mobileScreenPadding py-16 bg-white text-typography">
      <div className="flex flex-wrap justify-between max-[520px]:grid max-[520px]:grid-cols-2 max-[520px]:gap-y-8 items-start w-full">
        
        {/* Quick Links Section */}
        <div className="flex flex-col w-1/3 max-[520px]:w-full mb-8">
          <h2 className="font-headings text-base font-semibold text-typography mb-2">Quick Links</h2>
          <ul className="font-texts text-sm font-semibold text-typography/70 space-y-2">
            <li><Link to="/about" className="hover:text-typography">About Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-typography">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-typography">Refund & Return</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col w-1/3 max-[520px]:w-full mb-8">
          <h2 className="font-headings text-base font-semibold text-typography mb-2">Help</h2>
          <ul className="font-texts text-sm font-semibold text-typography/70 space-y-2">
            <li>Contact Us: nilayrathod129@gmail.com </li>
            <li>Customer Service: +91 9324263899</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="flex flex-col w-1/3 max-[520px]:w-full mb-8">
          <h2 className="font-headings text-base font-semibold text-typography mb-2">Socials</h2>
          <ul className="font-texts text-sm font-semibold text-typography/70 space-y-2">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-typography"><InstagramIcon fontSize="small" /> <span className="ml-2">Instagram</span></a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-typography"><FacebookIcon fontSize="small" /> <span className="ml-2">Facebook</span></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-typography"><XIcon fontSize="small" /> <span className="ml-2">Twitter</span></a></li>
          </ul>
        </div>

      </div>
      <div className="text-center text-sm text-typography/50 mt-8">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterLinks;
