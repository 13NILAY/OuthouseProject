import React ,{useEffect,useState}from 'react'
import axios from '../../../api/axios'
import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom'

const FeaturedProds = () => {
    const [products,setProducts] =useState([]);
    useEffect( ()=>{
     const fetchData= async ()=>{
      try {
        const allProducts=await axios.get("/product/allProducts");
        console.log(allProducts?.data.data);
        setProducts(allProducts.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    
    },[])
  return (
    <>
        <div className='px-sectionPadding max-md:px-mobileScreenPadding text-typography w-full'>
            <div className='flex flex-col justify-center items-center'>
                <p className=' font-headings text-5xl '>Featured Products</p>
                <p className='text-base max-mobileL:text-sm font-texts my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aut</p>
            </div>
            
            <div className='grid sm:grid-cols-3 gap-x-6 my-10 max-sm:grid-cols-2 max-mobileL:grid-cols-1'>
                {products.map((prod)=>(
                    <SingleProduct key={prod._id} products={prod}/>
                ))

                }
                
            </div>

            <div className='w-full flex justify-center items-center'>
              <Link to="/shop">
                <button className='text-background bg-primary border-typography border px-10 py-2 text-xl font-headings font-semibold rounded-sm'>
                  View All Products
                </button>
              </Link>
            </div>
        </div>


    </>
  )
}

export default FeaturedProds