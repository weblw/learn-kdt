import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from './kkb-redux.js'

export const connect=(
	mapStateToProps=state=>state,mapDispatchToProps={}
)=>(
	(WrapComponet)=>{
		return class ConnectComponent extends Component{
			static contextTypes={
				store:PropTypes.object
			}
			constructor(props,context){
				super(props,context)
				this.state={
					props:{}
				}
			}
			componentDidMount(){
				const {store}=this.context
				store.subscribe(()=>this.update())
				this.update()
			}
			update(){
				const {store}=this.context
				const stateProps=mapStateToProps(store.getState())
				const dispatchProps=bindActionCreators(
					mapDispatchToProps,store.dispatch
				) 
				this.setState({
					props:{
						...this.state.props,
						...stateProps,
						...dispatchProps
					}
				})
			}
			render(){
				return <WrapComponet {...this.state.props}></WrapComponet>
			}
		}
	}
)

export class Provider extends Component{
	static childContextTypes={
		store:PropTypes.object
	}
	getChildContext(){
		return {store:this.props.store}
	}
	constructor(props,context){
		super(props,context)
		this.state=props.store
	}
	render(){
		return this.props.children
	}
}