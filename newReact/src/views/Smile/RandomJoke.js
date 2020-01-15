import React,{Component} from 'react'
import Joke from './Joke.js'

export default class RandomJoke extends Component{
	state={
		joke:null
	}
	render(){
		return <Joke value={this.state.joke} />
	}
	componentDidMount(){
		fetch('https://icanhazdadjoke.com/',
			{headers:{'Accept':'application/json'}}
		).then(res=>{
			return res.json()
		}).then(res=>{
			this.setState({
				joke:res.joke
			})
		})
	}
}