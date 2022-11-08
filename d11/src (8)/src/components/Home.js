import React,{createContext} from 'react'
import Myeffect from './Myeffect'
export  const myContext=createContext(null);
export default function Home() {
  return (
    <div>
      <myContext.Provider value={{name:'sumit',age:23}}>
        <h2> Home Page</h2>
           <Myeffect />
      </myContext.Provider>
    </div>
  )
}
