import React,{useState,useMemo} from 'react'
function squareNum(number){
    console.log("Square done");
    return Math.pow(number,2);
}
export default function Mymemo() {
    const [number,setNumber]=useState(0);
    const [counter,setCounter]=useState(0);
    const mysquare=useMemo(()=>{
        squareNum(number);
    },[number])
    
    const onChangeHandler=(e)=>{
        setNumber(e.target.value)
    }
    const counterHandler=()=>{
        setCounter(counter+1)
    }
  return (
    <div>
        <h2> Use Memo Example</h2>
        <input type="number" value={number} onChange={onChangeHandler}/><br/>
        <p> Square is :{mysquare}</p>
        <button onClick={counterHandler}> Counter ++</button>
        <p> Counter:{counter}</p>
    </div>
  )
}
