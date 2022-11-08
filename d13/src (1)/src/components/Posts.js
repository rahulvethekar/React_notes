import React,{useState} from 'react'
import { useSelector } from 'react-redux'

export default function Posts() {
  const postData=useSelector(state=> state.postData)
  return (
    <div>
        <h2> Latest Posts</h2>
       
        {postData?.map(post=>
            <div key={post.id}>
                 <h4> {post.title}</h4>
                 <article> {post.body} </article>
                 <hr/>
            </div>)}
    </div>
  )
}
