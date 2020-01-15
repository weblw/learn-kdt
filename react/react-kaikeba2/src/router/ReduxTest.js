import React from 'react'

import {
	BrowserRouter,
	Link,
	Route
} from 'react-router-dom'

import {
	login
} from './user.redux.js'
import {
	connect
} from 'react-redux'

import FruitList from './FruitList.js'
import FruitAdd from './FruitAdd.js'
import Detail from './Detail.js'

import PrivateRoute from './PrivateRoute.js'
import Login from './Login.js'


const WithPrivateRoute = connect(state => ({
	isLogin: state.isLogin
}))(PrivateRoute)

const WithLogin = connect(state => ({
	isLogin: state.isLogin
}), {
	login
})(Login)


const loading = false
const fruits = ['香蕉', '苹果', '水蜜桃']
const f = '草莓'

function ReduxTestContainer() {
	return ( <
		BrowserRouter >
		<
		nav >
		<
		Link to = '/' > 水果列表 < /Link> <
		Link to = '/add' > 添加水果 < /Link> <
		Link to = {
			`/detail/${f}`
		} > {
			f
		} < /Link> <
		/nav> <
		div >
		<
		Route exact path = '/'
		render = {
			props =>
			loading ?
			< div > ...数据加载中 < /div> :
				< FruitList fruits = {
				fruits
			}
			/>
		}
		/> <
		WithPrivateRoute path = '/add'
		component = {
			FruitAdd
		}
		/> <
		Route path = '/login'
		component = {
			WithLogin
		}
		/> <
		Route path = '/detail/:fruit'
		component = {
			Detail
		}
		/> <
		/div> <
		/BrowserRouter>
	)
}

export default ReduxTestContainer