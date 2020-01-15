import React,{Component} from 'react'

// import store from './store.js'
import {connect} from './react-redux.js'
import {add,minus,asyncAdd,asyncMinus} from './actionCreators.js'

@connect(
	state=>({num:state.counter}),
	{
		add,
		minus,
		asyncAdd,
		asyncMinus
	}
)
class ReduxTest extends Component{
	render(){
		return (
			<div>
				<p>{this.props.num}</p>
				<div>
					<button
						onClick={this.props.add}
					>+</button>
					<button
						onClick={this.props.asyncAdd}
					>++</button>
					<button
						onClick={this.props.minus}
					>-</button>
					<button
						onClick={this.props.asyncMinus}
					>--</button>
				</div>
			</div>
		)
	}
}

export default ReduxTest