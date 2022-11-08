import React,{Component} from 'react';
class Myhomeclass extends Component{
    constructor(props){
        super(props);
        this.state={userData:[]}
    }
    componentDidMount(){
         setTimeout(()=>{
              this.setState({userData:["A","B","C","D"]})
         },3000)
    }
    xyz=()=>{
         this.setState({userData:["E","F","G","H"]})
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevState.userData)
        if(prevState.userData!=this.state.userData){
            console.log("Fire")
        }
    }
    render(){
        return(
            <>
               <h2> My home class component</h2>
               <ul>
                  {this.props.mycourses.map((c,ind)=>
                  <li key={ind}> {c} </li>
                  )}
               </ul>
               <ul>
                  {this.state.userData.map((val,ind)=>
                  <li key={ind}>{val}</li>)}
               </ul>
               <button onClick={this.xyz}> Update Courses</button>
            </>
        )
    }
}
export default Myhomeclass