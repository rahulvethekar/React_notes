import React,{useState} from "react";
function Myfunction({mytitle,mycourses}){
    const [count,setCount]=useState(0);//define state 
    const [state,setState]=useState({name:'anuj',age:23})
    const myincremnent=()=>{
        setCount(count+1);//update state
    }
    const update=()=>{
        setState({...state,name:'sumit'})
    }
    return(
        <>
           <h2> {mytitle}</h2>
           <ul>
              {mycourses.map((val,ind)=>
              <li key={ind}> {val} </li>)}
           </ul>
           {/* Read STate */}
           <p> The counter is {count}</p>
           <button onClick={myincremnent}> Increment</button>
           <p> The name is {state.name} and age is {state.age}</p>
           <button onClick={update}> Update</button>
        </>
    )
}
export default Myfunction;