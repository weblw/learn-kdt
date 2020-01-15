import React,{Component} from 'react'
// import JsxTest from './components/JsxTest'
// import StateMgt from './components/StateMgt'
// import StateTest from './components/StateTest'
// import ClockFunc from './components/ClockFunc'
// import EventHandle from './components/EventHandle'
// import LiseCycle from './components/LifeCycle'
// import Context from './components/Context'
// import HocTest from './components/Hoc'
// import ContextTest from './components/ContextTest'
// import HocTest from './components/HocTest'
// import Composition from './components/Composition'
// import Composition from './components/Composition3'
import HooksTest from './components/HooksTest2'

class App extends Component{
  // state={prop:'some content'}
  // componentDidMount(){
  //   this.setState({prop:'new content'})
  //   setTimeout(()=>{
  //     this.setState({prop:''})
  //   },2000)
  // }
  render(){
    return (
      <div>
        {/* <JsxTest /> */}
        {/* <StateMgt /> */}
        {/* <StateTest /> */}
        {/* <ClockFunc /> */}
        {/* <EventHandle /> */}
        {/* <h2>{this.props.title}</h2> */}
        {/* {this.state.prop && <LiseCycle prop={this.state.prop} />} */}
        {/* <Context /> */}
        {/* <HocTest /> */}
        {/* <ContextTest /> */}
        {/* <HocTest /> */}
        {/* <Composition /> */}
        <HooksTest />
      </div>
    )
  }  
}


export default App