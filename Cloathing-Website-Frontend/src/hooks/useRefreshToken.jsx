import React from 'react'
import useAuth from './useAuth'
import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';


const useRefreshToken = () => {
    const {setAuth} =useAuth();
    
    const refresh =async ()=>{          
        const response =await axios.get('/refresh',{
            withCredentials:true
        });
        setAuth(prev =>{
            return {
                ...prev,
                    roles:response.data.roles,
                    accessToken:response.data.accessToken 
            }
        });
        return response.data.accessToken;
};
   return refresh;
};
export default useRefreshToken;