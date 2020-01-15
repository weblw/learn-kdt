import React,{useState,useEffect} from 'react'

function ClockFunc(){
  // useState创建一个状态和修改状态的函数
  const [date,setDate]=useState(new Date())
  // useEffect编写副作用代码
  useEffect(()=>{
    // 启动定时器是我们副作用代码
    const timerID=setInterval(()=>{
      setDate(new Date())
    },1000)
    // 返回清理函数
    return ()=>clearInterval(timerID)
  },[]) // 参数2传递空数组使我们参数1函数仅执行一次
  return <div>{date.toLocaleTimeString()}</div>
}

export default ClockFunc