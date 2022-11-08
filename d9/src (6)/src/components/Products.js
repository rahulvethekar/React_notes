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
    const addCart=(id)=>{
       if(localStorage.getItem('mycart')!=undefined){
         let arr=JSON.parse(localStorage.getItem('mycart'));
         if(arr.includes(id)){
           alert("Product already in cart")
         }
         else {
          arr.push(id);
          localStorage.setItem('mycart',JSON.stringify(arr));
          alert("Product Add To Cart")
         }
       }
       else {
          let arr=[];
          arr.push(id);
          localStorage.setItem('mycart',JSON.stringify(arr));
          alert("Product Add To Cart")
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
                   <Link to={`/editproduct/${pro.id}`} className="btn btn-primary"> Edit</Link>
                   <button className='btn btn-danger' onClick={()=> delPro(pro.id)}> Delete</button>
                   <button className='btn btn-secondary' onClick={()=> addCart(pro.id)}> Add Cart</button>
                 </div>
               </div>
                )}
         </div>
    </div>
  )
}
