import React from 'react'

function getUserId(){
	if(Math.random()*10<5){
		return false
	}else{
		return true
	}	
}

const withLogin=(Component)=>{
	const newComponent=(props)=>{
		if(getUserId()){
			return <Component {...props} />
		}else{
			return null
		}
	}
	return newComponent
}

const LogoutButton=withLogin((props)=>{
	return ...; //显示退出登录的jsx
})

const ShopingCart=withLogin(()=>{
	return ...; // 显示购物车的jsx
})

const withLoginAndLogout=(ComponentForLogin,ComponentForLogout)=>{
	const newComponent=(props)=>{
		if(getUserId()){
			return <ComponentForLogin {...props} />
		}else{
			return <ComponentForLogout {...props} />
		}
	}
	return newComponent
}

const TopButton=withLoginAndLogout(
	LogoutButton,
	LoginButton
)

export default function compose(...funcs){
	if(funcs.length===0){
		return arg=>arg
	}
	if(funcs.length===1){
		return funcs[0]
	}
	return funcs.reduce((a,b)=>(...args)=>a(b(...args)))
}

const RenderAll=(props)=>{
	return (
		<React.Fragment>
			{this.children(props)}
		</React.Fragment>
	)
}

// 使用RenderAll
<RenderAll>
	{()=><h1>hello world</h1>}
</RenderAll>

const Login=(props)=>{
	const userName=getUserName()
	
	if(userName){
		const allProps={userName,...props}
		return (
			<React.Fragment>
				{props.children(allProps)}
			</React.Fragment>
		)
	}else{
		return null
	}
}

<Login>
	{({userName})=><h1>{userName}</h1>}
</Login>

const Auth=(props)=>{
	const userName=getUserName()
	if(userName){
		const allProps={userName,...props}
		return (
			<React.Fragment>
				{props.login(allProps)}
			</React.Fragment>
		)
	}else{
		return (
			<React.Fragment>
				{props.nologin(Props)}
			</React.Fragment>
		)
	}
}

<Auth 
	login={({userName})=><h1>{userName}</h1>}
	nologin={()=><h1>please login</h1>}
/>

class ThemeProvider extends React.Component{
	getChildContext(){
		return {
			theme:this.props.value
		}
	}
	render(){
		return (
			<React.Fragment>
				{this.props.children}
			</React.Fragment>
		)
	}
}

ThemeProvider.childContextTypes={
	theme:PropTypes.object
}

class Subject extends React.Component{
	render(){
		const {mainColor} = this.context.theme
	}
	return (
		<h1 style={{color:mainColor}}>
			{this.props.children}
		</h1>
	)
}

Subject.contextTypes={
	theme:PropTypes.object
}

const Paragraph=(props,context)=>{
	const {textColor}=context.theme 
	return (
		<p style={{color:textColor}}>
			{props.children}
		</p>
	)
}

Paragraph.contextTypes={
	theme:PropTypes.object
}

const Page=()=>(
	<div>
		<Subject>标题</Subject>
		<Paragraph>正文</Paragraph>
	</div>
)

<ThemeProvider value={{mainColor:'red',textColor:'green'}}>
	<Page />
</ThemeProvider>

const ThemeContext=React.createContext()
const ThemeProvider=ThemeContext.Provider 
const ThemeConsumer=ThemeContext.Consumer

class Subject extends React.Component{
	render(){
		return (
			<ThemeConsumer>
				{
					(theme)=>(
						<h1 style={{color:theme.mainColor}}>
							{this.props.children}
						</h1>
					)
				}
			</ThemeConsumer>
		)
	}
}

const Paragraph=(props,context)=>{
	return (
		<ThemeConsumer>
			{
				(theme)=>(
					<p style={{color:theme.textColor}}>
						{props.children}
					</p>
				)
			}
		</ThemeConsumer>
	)
}

<ThemeProvider value={{mainColor:'red',textColor:'green'}}>
	<Page />
</ThemeProvider>






