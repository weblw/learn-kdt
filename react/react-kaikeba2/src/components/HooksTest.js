import React,{useState,useEffect} from 'react'

// 声明列表组件
function FruitList({ fruits, onSetFruit }) {
  console.log(fruits)
  return (
    <ul>
      {fruits.map(f => (
        <li key={f} onClick={() => onSetFruit([f])}>
          {f}
        </li>
      ))}
    </ul>
  );
}

// 声明输入组件
function FruitAdd(props){
  // 输入内容状态及设置内容状态的方法
  const [pname,setPname]=useState('')
  // 键盘事件处理
  const onAddFruit=e=>{
    if(e.key==='Enter'){
      props.onAddFruit(pname)
      setPname('')
    }
  }
  return (
    <div>
      <input
        type='text'
        value={pname}
        onChange={e=>setPname(e.target.value)}
        onKeyDown={onAddFruit}
      />
    </div>
  )
}

export default function HooksTest(){
  const [fruits,setFruits]=useState([])
  useEffect(()=>{
    setTimeout(()=>{
      setFruits(['香蕉','西瓜'])
    },1000)
  },[])// 设置空数组意味没有依赖，则副作用操作只执行一次
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log('test')
    },1000)
    return function(){
      clearInterval(timer)
    }
  },[])
  return (
    <div>
      {/* 添加水果组件 */}
      <FruitAdd onAddFruit={pname=>setFruits([...fruits,pname])} />
      {/* 添加列表组件 */}
      <p>{fruits==='' ? '选择你喜爱的水果：' : `您选择的水果是：${fruits}`}</p>
      <FruitList fruits={fruits} onSetFruit={setFruits} />
    </div>
  )
}