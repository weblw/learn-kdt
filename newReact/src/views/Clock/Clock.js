import React,{Component} from 'react'

class StopWatch extends Component{
	render(){
		// 返回所有JSX
		return (
			<div>
				// 钟表
				<MajorClock />
				// 控制按钮
				<ControlButtons />
				// 时间记录
				<SplitTimes />
			</div>
		)
	}
}

const MajorClock = (props)=>{
	// 返回时钟的JSX 
	// state 当前时间 timeElapsed
	// state 是否启动 activated
}
MajorClock.propTypes={
	millisecounds:PropTypes.number.isRequired
}

const ControlButtons = (props)=>{
	// 返回两个控制按钮的JSX
	// state 是否启动 activated
}
ControlButtons.propTypes={
	activated:PropTypes.bool,
	onStart:PropTypes.func.isRequired,
	onPause:PropTypes.func.isRequired,
	onSplit:PropTypes.func.isRequired,
	onReset:PropTypes.func.isRequired
}

const SplitTimes = (props)=>{
	// 返回所有计时时间的JSX
	// state 每次时间 splits
}
SplitTimes.propTypes={
	splits:PropTypes.arrayOf(PropTypes.number)
}