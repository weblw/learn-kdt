import {createStore,applyMiddleware} from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

const initialState={isLogin:false,loading:false}

const reducer=(state=initialState,action)=>{
	switch(action.type){
		case 'requestLogin':
			return {isLogin:false,loading:false}
		case 'loginSuccess':
			return {isLogin:true,loading:false}
		case 'loginFailure':
			return {isLogin:false,loading:false}
		default:
			return state
	}
}

export function login(user){
	return dispatch=>{
		dispatch({type:'requestLogin'})
		setTimeout(()=>{
			 if (Date.now() % 2 === 0) {        
				dispatch({ type: "loginSuccess" })     
			} else {       
				dispatch({ type: "loginFailure" })   
			} 
		},1000)
	}
}

const store=createStore(
	reducer,applyMiddleware(logger,thunk)
)

export  default store