import React from 'react'

function RadioGroup(props){
  // 不可行
  // React.Children.forEach(props.children,child=>{
  //   child.props.name=props.name
  // })
  return (
    <div>
      {React.Children.map(props.children,child=>{
        // 要修改child属性必须要先克隆他
        return React.cloneElement(child,{name:props.name})
      })}
    </div>
  )
}
// Radio传入value，name和children，注意区分
function Radio({children,...rest}){
  return (
    <label>
      <input type='radio' {...rest} />
      {children}
    </label>
  )
}

export default function Composition(){
  return (
    <div>
      {/* 执行显示消息的key */}
      <RadioGroup name='mvvm'>
        <Radio value='vue'>vue</Radio>
        <Radio value='react'>react</Radio>
        <Radio value='angular'>angular</Radio>
      </RadioGroup>
    </div>
  )
}