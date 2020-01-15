import React,{Component} from 'react'

// 创建上下文对象
const Context=React.createContext()
// 获取Provider和Consumer
const Provider=Context.Provider
const Consumer=Context.Consumer

// withConsumer是高阶组件工厂，它能根据配置返回一个高阶组件
function withConsumer(Consumer){
  return Comp=>props=>{
    return <Consumer>{value=><Comp {...value} {...props} />}</Consumer>
  }
}

// Child显示计数器，并能修改它，多个Child之间能够共享数据
// 新的Child是通过withConsumer（Consumer）返回的高阶组件包装所得
const Child=withConsumer(Consumer)(function(props){
  return <div onClick={()=>props.add()} title={props.name}>
    {props.counter}
  </div>
})

export default class ContextTest extends Component{
  state={counter:0}
  add=()=>{
    this.setState(nextState=>({counter:nextState.counter+1}))
  }
  render(){
    return (
      <Provider value={{counter:this.state.counter,add:this.add}}>
        {/* 改造之后的Child可以自动从Consumer中获取值，直接使用 */}
        <Child name='foo' />
        <Child name='bar' />
      </Provider>
    )
  }
}