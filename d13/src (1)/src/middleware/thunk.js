import axios from "axios";
export default function rootReducer(){
    return (dispatch)=>{
         const URL="https://jsonplaceholder.typicode.com/posts";
         axios.get(URL)
         .then(res=>{
            console.log(res.data)
            dispatch({type:'POSTDATA',payload:res.data})
         })
         .catch(err=> console.log(err))
    }
}