import React,{useState} from 'react'
import useFetchData from '../custom/useFetchData';

export default function Posts() {
   let [postData,setPostData]=useState([])
   const API="https://jsonplaceholder.typicode.com/posts";
   const data=useFetchData(API)
    const FetchPosts=()=>{
        setPostData(data);
    }
  return (
    <div>
        <h2> Latest Posts</h2>
        <button onClick={FetchPosts}> Get Posts</button>
        {postData?.map(post=>
            <div key={post.id}>
                 <h4> {post.title}</h4>
                 <article> {post.body} </article>
                 <hr/>
            </div>)}
    </div>
  )
}
