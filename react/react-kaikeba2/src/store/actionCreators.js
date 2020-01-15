import {ADD,MINUS} from './actionTypes.js'

export const add=()=>({type:ADD})
export const minus=()=>({type:MINUS})
export const asyncAdd=()=>(dispatch)=>{
	setTimeout(()=>{
		dispatch({type:ADD})
	},1000)	
}
export const asyncMinus=()=>(dispatch)=>{
	setTimeout(()=>{
		dispatch({type:MINUS})
	},1000)	
}