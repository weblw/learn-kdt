import React from 'react'
import {createPortal} from 'react-dom'

export default class Dialog extends React.Component{
  constructor(props){
    super(props)
    const doc=window.document
    this.node=doc.createElement('div')
    doc.body.appendChild(this.node)
  }
  render(){
    return createPortal(
      <div>
        {this.props.children}
      </div>, // 塞进传送门的jsx
      this.node //传送门另一端的DOM node
    )
  }
  componentWillUnmount(){
    window.document.body.removeChild(this.node)
  }
}