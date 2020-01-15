import React,{useReducer} from 'react'

import CommentInput from './Comment/CommentInput'
import CommentList from './Comment/CommentList'

export const Context=React.createContext()

const reducer=(state,action)=>{
  switch(action.type){
    case 'init':
      return action.payload
    case 'add':
      return [...state,action.payload]
    case 'delete':
      return [
        ...state.slice(0,action.payload),
        ...state.slice(action.payload+1)
      ]
    default:
      return state
  }
}

function App(){
  const [comments,dispatch]=useReducer(reducer,[])
  return (
    <Context.Provider value={{comments,dispatch}}>
      <CommentInput />
      <CommentList />
    </Context.Provider>
  )
}
export default App
