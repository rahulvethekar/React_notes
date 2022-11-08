import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { deleteProduct, getAllProduct } from '../services/ProductService';

export default function Products() {
    const [proData,setProData]=useState([]);
    useEffect(()=>{
          getAllProduct()
          .then(res=>{
            console.log(res.data)
            setProData(res.data)
          })
    },[])
    const delPro=(id)=>{
        if(window.confirm("Do u want to delete ?")){
            deleteProduct(id)
            .then(res=>{
                if(res.data){
                    alert("Product Deleted");
                    let data=proData.filter(pro=> pro.id!=id);
                    setProData(data);
        //             getAllProduct()
        //        .then(res=>{
          
        //     setProData(res.data)
        //   })
                 }
            })
        }
    }
  return (
    <div>
        <h2> Products</h2>
         <Link to="/addproduct" className='btn btn-primary'> Add Product</Link>
         <div className='row'>
            {proData?.map(pro=>
                 <div className="col-sm-4 card" style={{width: '18rem'}}>
                 <img src={pro.image} className="card-img-top" alt="..." width={200} height={150}/>
                 <div className="card-body">
                   <h5 className="card-title">{pro.name}</h5>
                   <p className="card-text">Price : {pro.price} <br/>
                   Quantity : {pro.quantity} </p>
                   <button className='btn btn-danger' onClick={()=> delPro(pro.id)}> Delete</button>
                 </div>
               </div>
                )}
         </div>
    </div>
  )
}
