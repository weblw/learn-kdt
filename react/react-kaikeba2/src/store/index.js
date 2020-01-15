import {createStore,applyMiddleware,combineReducers} from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './reducer.js'

const store=createStore(
	combineReducers({counter:reducer}),
	applyMiddleware(logger,thunk)
)

export default store