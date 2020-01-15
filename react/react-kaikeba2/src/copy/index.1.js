import React from 'react'
import ReactDom from 'react-dom'

import store from './store'
import {Provider} from 'react-redux'

import App from './App'

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

// const render=()=>{
// 	ReactDom.render(
// 		<App />,
// 		document.getElementById('root')
// 	)
// }
// 
// render()
// 
// store.subscribe(render)
