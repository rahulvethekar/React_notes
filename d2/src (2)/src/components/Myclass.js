import React, { Component } from 'react';
class Myclass extends Component {
     constructor(props){
        super(props);
        this.state={count:0};//define state 
     }
     increment=()=>{
        this.setState({count:this.state.count+1})//update state data
     }
    componentDidMount(){
       this.increment()
    }
     componentWillUnmount(){
        console.log("Cleanup data")
     }
    render() {
        return (<>
            <h2> {this.props.mytitle} </h2>
            <p> Hello this is react training</p>
           {/* Read State data */}
            <p> The counter is {this.state.count}</p>
            <button onClick={this.increment}> Increment</button>
        </>)
    }
}
export  {Myclass};