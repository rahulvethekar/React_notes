import React from 'react'
import {Myclass} from './components/Myclass'
import Myfunction from './components/Myfunction'
import Myhomeclass from './components/Myhomeclass'

export default function App() {
  let title="Neosoft Technologies"
  let courses=["Php","Java","Block Chain",".net"]
  return (
    <div>
        <h1> React Training</h1>
        {/* <Myclass mytitle={title}/>
        <hr/>
        <Myhomeclass mycourses={courses}/> */}
        <Myfunction mytitle={title} mycourses={courses}/>
    </div>
  )
}
