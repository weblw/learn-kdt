import React,{memo} from 'react'
import SmileFace from './smile.jpg'

const Joke=memo(({value})=>{
	return (
		<div>
			<img src={SmileFace} />
			{value || 'loading ... '}
		</div>
	)
})

export default Joke