// action types
const INIT='INIT'
const ADD='ADD'
const DELETE='DELETE'
// reducer
export default function(state,action){
  if(!state){
    state={comments:[]}
  }
  switch(action.type){
    case INIT:
      return {
        comments:action.comments
      }
    case ADD:
      return {
        comments:[
          ...state.comments,
          action.comment
        ]
      }
    case DELETE:
      return {
        comments:[
          ...state.comments.slice(0,action.index),
          ...state.comments.slice(action.index+1)
        ]
      }
    default:
      return state
  }
}
// action creators
export const initComments=(comments)=>{
  return {
    type:INIT,
    comments
  }
}
export const addComment=(comment)=>{
  return {
    type:ADD,
    comment
  }
}
export const deleteComment=(index)=>{
  return {
    type:DELETE,
    index
  }
}