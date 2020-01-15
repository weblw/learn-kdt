import React,{Fragment} from 'react'
import padStart from 'lodash/padStart'

const MajorClock=({millisecound=0,actived=true})=>{
	return (
		<Fragment>
			<style jsx>{`
				h1{
					font-family:monospace;
					color:${actived ? 'red' : 'black'};
				}
			`}</style>
			<h1>{ms2Time(millisecound)}</h1>
		</Fragment>
	)
}

const ms2Time=(millisecound)=>{
	let time=millisecound
	const ms=millisecound%1000
	time=(millisecound-ms)/1000
	const secounds=time%60
	time=(time-secounds)/60
	const minutes=time%60
	const hours=(time-minutes)/60
	
	const result=padStart(hours,2,'0')+':'
		+padStart(minutes,2,'0')+':'
		+padStart(secounds,2,'0')+'.'
		+padStart(ms,3,'0')
	return result
}

export default MajorClock