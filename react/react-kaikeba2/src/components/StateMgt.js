import React,{Component} from 'react'

class Clock extends Component{
  constructor(props){
    super(props)
    this.state={date:new Date()}
  }
  componentDidMount(){
    this.timerID=setInterval(()=>{
      // 每次状态更新就通知父组件      
      this.setState({
        date:new Date()
      })
      this.props.change(this.state.date.toLocaleTimeString())
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  render(){
    return(
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default class StateMgt extends Component{
  render(){
    return (
      <div>
        <Clock change={this.onChange}/>
      </div>
    )
  }
  onChange(data){
    console.log(data)
  }  
}