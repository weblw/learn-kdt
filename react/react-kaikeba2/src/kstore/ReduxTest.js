import React,{Component} from 'react'

import {connect} from './react-redux.js'

@connect(
	state=>({num:state}),
	{
		add:()=>({type:'add'}),
		minus:()=>({type:'minus'}),
		asyncAdd:()=>dispatch=>{
			setTimeout(()=>{
				dispatch({type:'add'})
			},1000)
		}
	}
)
class ReduxTest extends Component{
	render(){
		return (
			<div>
				<p>{this.props.num}</p>
				<button onClick={this.props.add}>
					+
				</button>
				<button onClick={this.props.minus}>
					-
				</button>
				<button onClick={this.props.asyncAdd}>
					++
				</button>
			</div>
		)
	}
}

export default ReduxTest