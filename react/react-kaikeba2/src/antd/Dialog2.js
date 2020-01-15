import React from 'react'

export default class Dialog extends React.Component{
  render(){
    return null
  }
  componentDidMount(){
    const doc=window.document
    this.node=doc.createElement('div')
    doc.body.appendChild(this.node)
    this.createProtal(this.props)
  }
  componentDidUpdate(){
    this.createProtal(this.props)
  }
  componentWillUnmount(){
    unmountComponentAtNode(this.node)
    window.document.body.removeChild(this.node)
  }
  createProtal(props){
     unstable_renderSubtreeIntoContainer(
      this,// 当前组件
      <div>{props.children}</div>,// 塞进传送门的jsx
      this.node // 传送门另一端的DOM node
    )
  }
}