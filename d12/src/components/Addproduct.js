import React,{useState} from 'react'
import { postAddProduct } from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 const proSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is Required')
      .matches(/^[a-zA-Z ]+$/,"Only alphabate allow"),
    price: Yup.string()
      .required('Price is Required')
      .matches(/^[0-9]{1,5}$/,"Only Digit allow"),
    quantity: Yup.string()
    .required('Quantity Required')
    .matches(/^[0-9]{1,5}$/,"Only Digit allow"),
    image: Yup.string()
    .required(' Image is Required'),
  });
export default function () {
    // let [state,setState]=useState({name:'',price:'',quantity:'',image:''})
    const navigate=useNavigate();
    // const handler=(event)=>{
    //  const {name,value}=event.target;
    //  setState({...state,[name]:value})
    // }
    // const postData=(event)=>{
    //      event.preventDefault();
    //      postAddProduct(state)
    //      .then(res=>{
    //         if(res.data){
    //             alert("Product Added");
    //             navigate("/products");//navigate to products
    //         }
    //      })
    // }
  return (
    <div>
        <h2> Add Product</h2>
        <Formik
       initialValues={{
         name: '',
         price: '',
         quantity: '',
         image: '',
       }}
       validationSchema={proSchema}
       onSubmit={values => {
         // same shape as initial values
        //  console.log(values);
               postAddProduct(values)
         .then(res=>{
            if(res.data){
                alert("Product Added");
                navigate("/products");//navigate to products
            }
         })
       }}
     >
          {({ errors, touched }) => (
        <Form>
            <div className='form-group'>
                <label> Name</label>
                <Field  type="text" name="name" className='form-control' />
                {errors.name && touched.name ? (
             <div className='alert alert-danger'>{errors.name}</div>
           ) : null}
            </div>
            <div className='form-group'>
                <label> Price</label>
                <Field type="text" name="price" className='form-control' />
                {errors.price && touched.price ? (
             <div className='alert alert-danger'>{errors.price}</div>
           ) : null}
            </div>
            <div className='form-group'>
                <label> Quantity</label>
                <Field type="text" name="quantity" className='form-control' />
                {errors.quantity && touched.quantity ? (
             <div className='alert alert-danger'>{errors.quantity}</div>
           ) : null}
            </div>
            <div className='form-group'>
                <label> Image Path</label>
                <Field type="text" name="image" className='form-control' />
                {errors.image && touched.image ? (
             <div className='alert alert-danger'>{errors.image}</div>
           ) : null}
                
            </div>
            <input type="submit" value="Add" className="btn btn-success"/>
        </Form>
        )}
        </Formik>
    </div>
  )
}
