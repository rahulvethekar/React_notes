import React,{useState,useEffect} from 'react'
import { editProduct, getProductById, postAddProduct } from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function () {
    let [state,setState]=useState({})
    let {id}=useParams();
    useEffect(()=>{
        getProductById(id)
        .then(res=>{
            if(res.data){
              setState(res.data);
            }
        })
    },[])
    const navigate=useNavigate();
    const handler=(event)=>{
     const {name,value}=event.target;
     setState({...state,[name]:value})
    }
    const postData=(event)=>{
         event.preventDefault();
         editProduct(id,state)
         .then(res=>{
            if(res.data){
                alert("Product Updated");
                navigate("/products");
            }
         })
    }
  return (
    <div>
        <h2> Edit Product</h2>
        <form onSubmit={postData}>
            <div className='form-group'>
                <label> Name</label>
                <input type="text" name="name" className='form-control' value={state.name} onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Price</label>
                <input type="text" name="price" className='form-control' value={state.price} onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Quantity</label>
                <input type="text" name="quantity" className='form-control' value={state.quantity} onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Image Path</label>
                <input type="text" name="image" className='form-control' value={state.image} onChange={handler}/>
            </div>
            <input type="submit" value="Edit" className="btn btn-success"/>
        </form>
    </div>
  )
}
