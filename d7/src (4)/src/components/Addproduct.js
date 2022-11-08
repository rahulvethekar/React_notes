import React,{useState} from 'react'
import { postAddProduct } from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
export default function () {
    let [state,setState]=useState({name:'',price:'',quantity:'',image:''})
    const navigate=useNavigate();
    const handler=(event)=>{
     const {name,value}=event.target;
     setState({...state,[name]:value})
    }
    const postData=(event)=>{
         event.preventDefault();
         postAddProduct(state)
         .then(res=>{
            if(res.data){
                alert("Product Added");
                navigate("/products");//navigate to products
            }
         })
    }
  return (
    <div>
        <h2> Add Product</h2>
        <form onSubmit={postData}>
            <div className='form-group'>
                <label> Name</label>
                <input type="text" name="name" className='form-control' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Price</label>
                <input type="text" name="price" className='form-control' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Quantity</label>
                <input type="text" name="quantity" className='form-control' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label> Image Path</label>
                <input type="text" name="image" className='form-control' onChange={handler}/>
            </div>
            <input type="submit" value="Add" className="btn btn-success"/>
        </form>
    </div>
  )
}
