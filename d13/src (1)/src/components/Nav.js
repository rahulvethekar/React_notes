import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function Nav() {
    const counter=useSelector(state=> {
      console.log(state)
      return state.count})
    const cartData=useSelector(state=> state.cartData)
    const [category,setCategory]=useState(['mens','womens','kids'])
    // const [count,setCount]=useState(0);
    useEffect(()=>{
      //  if(localStorage.getItem('mycart')!=undefined){
      //   let arr=JSON.parse(localStorage.getItem('mycart'));
      //   setCount(arr.length)
      //  }
    },[])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {category?.map((cat,ind)=>
            <li key={ind}><Link className="dropdown-item" to={`/category/${cat}`}>{cat}</Link></li>
            )}
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/posts">Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/users">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/callback">Callback</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/callback">Redux ({counter})</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/products">Cart {cartData?.length>0 && <span>({cartData.length})</span>}</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
