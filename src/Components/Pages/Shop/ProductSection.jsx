import React,{useState,useEffect} from 'react'
import SingleProduct from '../Home/SingleProduct'
import axios from '../../../api/axios';

const ProductSection = () => {
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
        <div className='px-sectionPadding max-md:px-mobileScreenPadding grid max-md:grid-cols-2  md:grid-cols-3 max-mobileL:grid-cols-1 mobileL:gap-x-6 mobileL:gap-y-3 max-mobileL:gap-1'>
              {products.map((prod)=>(
                    <SingleProduct key={prod._id} products={prod}/>
                ))
              }  
        </div>
        <div className=''></div>
    </>
  )
}

export default ProductSection