import React,{useState,useContext} from 'react'
import {Context} from '../App'

function CommentInput(){
  const [username,setUsername]=useState('')
  const [content,setContent]=useState('')
  const {dispatch}=useContext(Context)
  function handleSubmit(){
    dispatch({type:'add',payload:{username,content}})
  }
  return (
    <div>
      <label>用户名：</label>
      <input value={username} onChange={(e)=>{setUsername(e.target.value)}} />
      <br />
      <label>评论内容：</label>
      <input value={content} onChange={(e)=>{setContent(e.target.value)}} />
      <br />
      <button onClick={()=>{handleSubmit()}}>提交</button>
    </div>
  )
}

export default CommentInput