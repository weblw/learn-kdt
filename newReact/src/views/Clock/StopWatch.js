import React,{Component,Fragment} from 'react'
import MajroClock from './MajroClock.js'
import ControlButton from './ControlButton.js'
import SplitTimes from './SplitTimes.js'

class StopWatch extends Component{
	constructor(){
		super(...arguments)
		this.state={
			isStarted:false,
			startTime:null,
			currentTime:null,
			splits:[]
		}
	}
	render(){
		return (
			<Fragment>
				<style jsx>{`
					h1{
						color:green;
					}
				`}</style>
				<h1>秒表</h1>
				<MajroClock 
					millisecound={this.state.currentTime - this.state.startTime}
				/>
				<ControlButton 
					actived={this.state.isStarted} 
					onStart={this.onStart}
					onPause={this.onPause}
					onSplit={this.onSplit}
					onReset={this.onReset}
				/>
				<SplitTimes 
					value={this.state.splits}
				/>
			</Fragment>		
		)
	}
	onSplit=()=>{
		const {splits,currentTime,startTime}=this.state
		this.setState({
			splits:[...splits,currentTime-startTime]
		})
	}
	onStart=()=>{
		this.setState({
			isStarted:true,
			startTime:new Date(),
			currentTime:new Date()
		})
		this.intervalHandle=setInterval(()=>{
			this.setState({
				currentTime:new Date()				
			})
		},1000/60)
	}
	onPause=()=>{
		clearInterval(this.intervalHandle)
		this.setState({
			isStarted:false
		})
	}
	onReset=()=>{
		this.setState({
			startTime:null,
			currentTime:null,
			splits:[]
		})
	}
}

export default StopWatch