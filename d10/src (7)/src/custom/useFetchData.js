import axios from 'axios';
import {useState,useEffect} from 'react';
export default function useFetchData(url){
   let [data,setData]=useState([]);
   useEffect(()=>{
     axios.get(url)
     .then(res=>{
        setData(res.data)
     })
     .catch(err=> console.log(err))
   
   },[])
   return data;
}