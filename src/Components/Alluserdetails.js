import React ,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Cookies from'js-cookie'


const Alluserdetails = ()=>{

    const [userDetails,setUserDetails]=useState([]);
    const naviagte = useNavigate(); 

 
    const token=Cookies.get('jwtAuth');
   
    const headers={Authorization : token}

    const fetchUsers = async()=>{
        try {
            const response= await axios.get('http://localhost:5555/registeredUser',{headers}) 
            setUserDetails(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    

    useEffect(()=>{
        fetchUsers()
    },[]);

    useEffect(()=>{
      if(!token){
        naviagte('/login')
      }
        
      

    },[])


  return (
    <div>
      
    </div>
  )
}

export default Alluserdetails
