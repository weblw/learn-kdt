import React from 'react'

const TabItem=(props)=>{
	const {active,onClick}=props
	const tabStyle={
		'maxWidth':'150px',
		color:active ? 'red' : 'green',
		border:active ? '1px solid red' : '0px'
	}
	return (
		<h1 style={tabStyle} onClick={onClick}>
			{props.children}
		</h1>
	)
}

class Tabs extends React.Component{
	state={activeIndex:0}
	render(){
		const newChildren=
			React.Children.map(this.props.children,(child,index)=>{
				if(child.type){
					return React.cloneElement(child,{
						active:this.state.activeIndex===index,
						onClick:()=>this.setState({activeIndex:index})
					})
				}else{
					return child
				}
			})
		return (
			<React.Fragment>
				{newChildren}
			</React.Fragment>
		)
	}
}

const TabsShow=()=>{
	return (
		<Tabs>
			<TabItem>One</TabItem>
			<TabItem>Two</TabItem>
			<TabItem>Three</TabItem>
		</Tabs>
	)
}

export default TabsShow