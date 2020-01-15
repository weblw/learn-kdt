import React,{useContext,useEffect} from 'react'
import {Context} from '../App'

function CommentList(){
  const {comments,dispatch}=useContext(Context)
  useEffect(()=>{
    setTimeout(()=>{
       dispatch({type:'init',payload:[
         {username:'tom',content:'我很帅'}
       ]})
    },1000)   
  },[dispatch])
  function handleClick(index){
    dispatch({type:'delete',payload:index})
  }
  return (
    <div>
      <ul>
        {comments.map((item,index)=>(
          <li key={index}>
            <p>用户名：{item.username}</p>
            <p>评论内容：{item.content}</p>
            <button onClick={()=>handleClick(index)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommentList