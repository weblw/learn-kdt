import React from 'react'
import MajroClock from './MajroClock.js'

const SplitTimes=({value=[]})=>{
	return value.map((v,k)=>(
		<MajroClock key={k} millisecound={v} />
	))
}

export default SplitTimes
