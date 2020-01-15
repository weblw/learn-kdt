import React,{Component} from 'react'

// 创建上下文
const Context=React.createContext()
// 获取Provider和Consumer
const Provider=Context.Provider
const Consumer=Context.Consumer

// Child显示计数器，并修改它，多个Child之间需要共享数据
function Child(props){
  return <div onClick={()=>props.add()}>{props.counter}</div>
}

export default class ContextTest extends Component{
  // state是要传递的数据
  state={
    counter:0
  }
  add=()=>{
    this.setState(nextState=>({counter:nextState.counter+1}))
  }
  // counter状态变更
  render(){
    return (
      <Provider value={{counter:this.state.counter,add:this.add}}>
        {/* Consumer中内嵌函数，其参数是传递的数据，返回要渲染的组件 */}
        {/* 把value展开传递给Child */}
        <Consumer>{value=><Child {...value} />}</Consumer>
        <Consumer>{value=><Child {...value} />}</Consumer>
      </Provider>
    )
  }
}