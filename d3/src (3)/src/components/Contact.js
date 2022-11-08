import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Contact() {
  return (
    <div>
        <h2> Contact Us</h2>
        <table className='mytable'>
           <tr>
              <td width="20%">
                <ul>
                  <li> <Link to="noida"> Noida</Link></li>
                  <li> <Link to="delhi"> Delhi</Link></li>
                  <li> <Link to="mumbai"> Mumbai</Link></li>
                </ul>
              </td>
              <td width="80%">
                  <Outlet />
              </td>
           </tr>
        </table>
    </div>
  )
}
  