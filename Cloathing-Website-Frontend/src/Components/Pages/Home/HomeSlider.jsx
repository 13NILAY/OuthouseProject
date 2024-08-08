import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trial1 from '../../../assets/trial1.jpg'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const HomeSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    arrows:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 850,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };
  return (
    <>
      <div className="w-full my-20 relative ">
        <Slider ref={slider => {
        sliderRef = slider;
        }}
        {...settings} className="w-full">
            <div className=' w-full bg-bannerBG px-sectionPadding py-10 relative'>
              <div className='flex justify-between max-md:flex-col-reverse items-center w-full'>
                <div className=' flex flex-col justify-evenly items-start w-1/2 max-md:w-full'>
                  <p className=' font-headings text-primary text-5xl max-mobileL:text-4xl max-mobileL:font-semibold my-2 '> New Arrivals</p>
                  <p className='text-base max-mobileL:text-sm font-texts'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, provident. Saepe consequuntur animi soluta vitae, ab hic! Nemo rem ipsam adipisci laborum ratione quae tempora ex, similique exercitationem minus labore? </p>
                  <div className="flex items-center text-sm mt-8 text-primary font-semibold font-headings">
                    <Link to='/shop' className="hover:underline transition duration-150 ease-in-out">View Collection</Link>
                    <ArrowRightAltOutlinedIcon style={{fontSize:"x-large", paddingTop:"3px"}}/>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <img src={trial1} className="h-96 max-md:h-80 max-[530px]:h-64 max-mobileM:h-52" />
                </div>
              </div>
            </div>

            <div className='w-full bg-blue-300 px-sectionPadding py-10 relative'>
              <div className='flex justify-between max-md:flex-col-reverse items-center w-full'>
                <div className=' flex flex-col justify-evenly items-start w-1/2 max-md:w-full'>
                  <p className=' font-headings text-primary text-5xl max-mobileL:text-4xl max-mobileL:font-semibold my-2 '> New Arrivals</p>
                  <p className='text-base max-mobileL:text-sm font-texts'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, provident. Saepe consequuntur animi soluta vitae, ab hic! Nemo rem ipsam adipisci laborum ratione quae tempora ex, similique exercitationem minus labore? </p>
                  <div className="flex items-center text-sm mt-8 text-primary font-semibold font-headings">
                    <Link to='/shop' className="hover:underline transition duration-150 ease-in-out">View Collection</Link>
                    <ArrowRightAltOutlinedIcon style={{fontSize:"x-large", paddingTop:"3px"}}/>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <img src={trial1} className="h-96 max-md:h-80 max-[530px]:h-64 max-mobileM:h-52" />
                </div>
              </div>
            </div>

            <div className='w-full bg-yellow-500 px-sectionPadding py-10 relative'>
              <div className='flex justify-between max-md:flex-col-reverse items-center w-full'>
                <div className=' flex flex-col justify-evenly items-start w-1/2 max-md:w-full'>
                  <p className=' font-headings text-primary text-5xl max-mobileL:text-4xl max-mobileL:font-semibold my-2 '> New Arrivals</p>
                  <p className='text-base max-mobileL:text-sm font-texts'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, provident. Saepe consequuntur animi soluta vitae, ab hic! Nemo rem ipsam adipisci laborum ratione quae tempora ex, similique exercitationem minus labore? </p>
                  <div className="flex items-center text-sm mt-8 text-primary font-semibold font-headings">
                    <Link to='/shop' className="hover:underline transition duration-150 ease-in-out">View Collection</Link>
                    <ArrowRightAltOutlinedIcon style={{fontSize:"x-large", paddingTop:"3px"}}/>
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <img src={trial1} className="h-96 max-md:h-80 max-[530px]:h-64 max-mobileM:h-52" />
                </div>
              </div>
            </div> 
        </Slider>  
        <div className="h-10 w-10 rounded-full border-black border cursor-pointer text-black flex justify-center items-center absolute left-5 top-1/2" onClick={previous}>
          <ChevronLeftOutlinedIcon/>
        </div>
        <div className="h-10 w-10 rounded-full border-black border cursor-pointer text-black flex justify-center items-center absolute right-5 top-1/2" onClick={next}>

          <ChevronRightOutlinedIcon/>
        </div>
      </div>
    </>
  )
}


export default HomeSlider

/*


*/