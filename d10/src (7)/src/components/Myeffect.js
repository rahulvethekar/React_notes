import React,{useState,useEffect,useRef} from 'react'

export default function Myeffect() {
    let [prodata,setProdata]=useState([]);
    let focusPoint=useRef(null);
    useEffect(()=>{
        setTimeout(()=>{
          setProdata(["A","B","C","D"])
        },2000)
    },[])
    //updateing 
    useEffect(()=>{
         console.log("Updating is fire")
    },[prodata])
    const upState=()=>{
        setProdata(["AA","BB","CC","DD"])
         focusPoint.current.value="useRef Example";
         focusPoint.current.focus();
    }
  return (
    <div>
         <h4> useEffect Example</h4>
         <ul>
            {prodata.map((pro,ind)=>
            <li key={ind}> {pro}</li>)}
         </ul>
         <textarea ref={focusPoint}/><br/>
         <button onClick={upState}> Update State</button>
    </div>
  )
}
