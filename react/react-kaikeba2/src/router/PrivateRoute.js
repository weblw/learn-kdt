import React from 'react'

import {Redirect,Route} from 'react-router-dom'

function PrivateRoute({component:Component,isLogin,...rest}){
	// 解构props为component和rest
	// rest为传递给Route的属性
	return (
		<Route 
			{...rest}
			render={
				// 执行登录判断逻辑从而动态生成组件
				props=>isLogin 
					? (<Component {...props} />)
					: (<Redirect to={{
						pathname:'/login',
						state:{redirect:props.location.pathname} // 重定向地址
					}} />)
			}
		/>
	)
}

export  default PrivateRoute