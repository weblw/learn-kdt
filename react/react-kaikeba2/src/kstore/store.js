import {createStore,applyMiddleware} from './redux.js'

const counterReducer=(state=0,action)=>{
	switch (action.type){
		case 'add':
			return state+1
		case 'minus':
			return state-1
		default:
			return state
	}
}

function logger1({dispatch,getState}){
	return dispatch=>action=>{
		// 中间任务
		console.log(action.type+'我来了')
		// 下一个中间件
		return dispatch(action)
	}
}

function logger2({dispatch,getState}){
	return dispatch=>action=>{
		// 中间任务
		console.log(action.type+'我又来了')
		// 下一个中间件
		return dispatch(action)
	}
}

const thunk=({dispatch,getState})=>dispatch=>action=>{
	if(typeof action==='function'){
		return action(dispatch,getState)
	}
	return dispatch(action)
}

const store=createStore(
	counterReducer,applyMiddleware(logger2,thunk,logger1)
)

export default store