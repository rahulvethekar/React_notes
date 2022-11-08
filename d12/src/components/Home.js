import React,{createContext} from 'react'
import Myeffect from './Myeffect'
import { useSelector,useDispatch } from 'react-redux';
export  const myContext=createContext(null);

export default function Home() {
  const counter=useSelector(state=> state.count);
  const dispatch=useDispatch();
  return (
    <div>
      <myContext.Provider value={{name:'sumit',age:23}}>
        <h2> Home Page</h2>
           <Myeffect />
           <hr/>
          <h2> Redux example</h2>
          <p> The redux counter is {counter}</p>
          <button onClick={()=> dispatch({type:'INC',payload:2})}> + </button>
          <button onClick={()=> dispatch({type:'DEC',payload:1})}> - </button>
      </myContext.Provider>
    </div>
  )
}
