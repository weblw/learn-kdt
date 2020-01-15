import React from 'react'

import {Redirect} from 'react-router-dom'

function Login({location,isLogin,login}){
	const redirect=location.state.redirect || '' //重定向地址
	if(isLogin) return <Redirect to={redirect} />
	return (
		<div>
			<p>用户登录</p>
			<br />
			<button onClick={login}>登录</button>
		</div>
	)
}

export default Login