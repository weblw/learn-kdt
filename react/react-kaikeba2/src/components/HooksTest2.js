import React,{useState,useReducer,useEffect,useContext} from 'react'

const Context=React.createContext()

// 添加fruit状态维护fruitReducer
function fruitReducer(state,action){
  switch(action.type){
    case 'init':
      return action.payload
    case 'add':
      return [...state,action.payload]
    default:
      return state
  }
}

// 声明输入组件
function FruitAdd(){
  const {dispatch}=useContext(Context)
  // 输入内容状态及设置内容状态的方法
  const [pname,setPname]=useState('')
  // 键盘事件处理
  const onAddFruit=e=>{
    if(e.key==='Enter'){
      dispatch({type:'add',payload:pname})
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

// 声明列表组件
function FruitList() {
  const {fruits}=useContext(Context)
  return (
    <ul>
      {fruits.map(f => (
        <li key={f} onClick={() => alert(f)}>
          {f}
        </li>
      ))}
    </ul>
  );
}

export default function HooksTest(){
  const [fruits,dispatch]=useReducer(fruitReducer,[])

  useEffect(()=>{
    setTimeout(()=>{
      dispatch({type:'init',payload:['香蕉','西瓜']})
    },1000)
  },[])

  return (
    <Context.Provider value={{fruits,dispatch}}>     
        {/* 派发新增动作 */}
        <FruitAdd />
        <FruitList />    
    </Context.Provider>
  )
}