import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Delhi from './components/Delhi'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Mumbai from './components/Mumbai'
import Nav from './components/Nav'
import Noida from './components/Noida'
import Pagenotfound from './components/Pagenotfound'
export default function App() {
  return (
    <div className='main'>
      <Router>
           <Nav />
           <section>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/gallery' element={<Gallery/>}/>
                  <Route path='/contact' element={<Contact/>}>
                     <Route path='noida' element={<Noida/>}/>
                     <Route path='delhi' element={<Delhi/>}/>
                     <Route path='mumbai' element={<Mumbai/>}/>
                  </Route>
                  <Route path='*' element={<Pagenotfound />}/>
              </Routes>
           </section>
      </Router>
    </div>
  )
}
