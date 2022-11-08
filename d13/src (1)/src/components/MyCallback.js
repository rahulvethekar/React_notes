import React,{useState,useCallback} from 'react'
import Todos from './Todos'

export default function MyCallback() {
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);
    const increment=()=>{
         setCount((c)=> c+1);
    }
    const addTodo=useCallback(()=>{
        setTodos((t)=> [...t,"New Todo"])
    },[todos])
  return (
    <div>
        <h2> Usecallback example</h2>
         <Todos todos={todos} addTodo={addTodo}/>
         <hr/>
         <div>
            Count  :{count}
            <button onClick={increment}> Increment</button>
         </div>
    </div>
  )
}
