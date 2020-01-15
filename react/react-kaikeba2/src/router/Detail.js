import React from 'react'

function Detail({
	match,
	history,
	location
}) {
	console.log(match, history, location)
	return ( <
		div >
		<
		h3 > {
			match.params.fruit
		}
		的详细信息 < /h3> <
		button onClick = {
			history.goBack
		} > 返回 < /button> <
		/div>
	)
}

export default Detail