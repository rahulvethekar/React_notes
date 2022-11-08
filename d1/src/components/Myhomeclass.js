import React,{Component} from 'react';
class Myhomeclass extends Component{
  
    render(){
        return(
            <>
               <h2> My home class component</h2>
               <ul>
                  {this.props.mycourses.map((c,ind)=>
                  <li key={ind}> {c} </li>
                  )}
               </ul>
            </>
        )
    }
}
export default Myhomeclass