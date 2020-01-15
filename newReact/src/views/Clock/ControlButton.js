import React from 'react'
import './ControlButton.css'

const ControlButtons=({actived,onStart,onPause,onReset,onSplit})=>{
	// const {actived,onStart,onPause,onReset,onSplit}=props
	if(actived){
		return (
			<div>
				<button 
					className='left-btn' 
					onClick={onSplit} 
				>计次</button>
				<button 
					className='right-btn' 
					onClick={onPause}
				>停止</button>
			</div>
		)
	}else{
		return (
			<div>
				<button 
					className='left-btn' 
					onClick={onReset}
				>复位</button>
				<button 
					className='right-btn' 
					onClick={onStart}>启动</button>
			</div>
		)
	}
}

export default ControlButtons