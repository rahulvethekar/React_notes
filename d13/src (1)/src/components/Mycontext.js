import React,{useContext} from 'react'
import { myContext } from './Home'
export default function Mycontext() {
    const myData=useContext(myContext)
  return (
    <div>
        <h2> Fetch Context API data</h2>
        <p> Name is {myData.name} and age is {myData.age}</p>
    </div>
  )
}
