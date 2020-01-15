import React,{Component} from 'react'

export default class StateTest extends Component{
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  render(){
    return(
      <div>
        <span>{this.state.counter}</span>
      </div>
    )
  }
  componentDidMount(){
    // this.setState({counter:this.state.counter+1})
    // this.setState({counter:this.state.counter+1})
    // this.setState({counter:this.state.counter+1})
    // this.setState((state,props)=>({counter:state.counter+1}))
    // console.log(this.state.counter)
    // setTimeout(()=>{console.log(this.state.counter)},0)
    // this.setState((state,props)=>({counter:state.counter+1}))
    // console.log(this.state.counter)
    // setTimeout(()=>{console.log(this.state.counter)},0)
    // this.setState((state,props)=>({counter:state.counter+1}))
    // console.log(this.state.counter)
    // setTimeout(()=>{console.log(this.state.counter)},0)
    document.body.addEventListener('click',this.changeValue,false)
  }
  changeValue=()=>{
    this.setState({counter:this.state.counter+1})
    console.log(this.state.counter)
  }
}