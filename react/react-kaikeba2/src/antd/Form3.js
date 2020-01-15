import React,{Component} from 'react'
import {Input,Button} from 'antd'

/*
**需要解决的问题
**1、input输入框的包装
**2、表单校验
**3、事件处理
*/ 

// 扩展表单的高阶组件，提供输入控件包装、事件处理、表单校验等
function KFormCreate(Comp){
  return class extends Component{
    constructor(props){
      super(props)
      this.options={}
      this.state={}
    }
    handleChange=e=>{
      let {name,value}=e.target
      this.setState({[name]:value},()=>{
        // 校验：注意回调中调用
        this.validateField(name)
      })
    }
    // 指定校验字段
    validateField=field=>{
      const rules=this.options[field].rules // 获取校验规则
      // 只要有一项校验失败就返回true跳出，对返回值取反表示校验失败
      const ret=!rules.some(rule=>{
        if(rule.required){
          // 仅验证必填项
          if(!this.state[field]){
            // 校验失败
            this.setState({
              // 设置错误信息
              [field+'Message']:rule.message
            })
            return true // 如果校验失败，返回true
          }          
        }
        return false
      })
      // 校验成功，清除错误信息
      if(ret) this.setState({[field+'Message']:''})
      return ret
    }
    // 校验所有字段
    validateFields=cb=>{
      // 将选项中所有field组成的数组转换为它们校验结果的数组
      const rets=Object.keys(this.options).map(field=>
        this.validateField(field)
      )
      const ret=rets.every(v => v)
      cb(ret,this.state)
    }
    getFieldDec=(field,option)=>{
      this.options[field]=option
      return InputComp=>(
        <div>
          {React.cloneElement(InputComp,{
            name:field,
            value:this.state[field]||'',
            onChange:this.handleChange
          })}
          {/* 添加一个校验提示信息 */}
          {this.state[field+'Message']&&(
            <p style={{color:'red',fontSize:'14px'}}>{this.state[field+'Message']}</p>
          )}
        </div>
      )
    }
    render(){
      return (
        <div>
          <Comp 
            {...this.props}
            getFieldDec={this.getFieldDec}
            validateFields={this.validateFields}
          />
        </div>
      )
    }
  }
}

@KFormCreate
class KFormTest extends Component{
  onSubmit=()=>{
    // 校验、提交
    this.props.validateFields((isValid,data)=>{
      if(isValid){
        console.log('提交登录',data)
      }else{
        alert('校验失败')
      }
    })
  }
  render(){
    // 结构扩展出来的方法
    const {getFieldDec}=this.props
    return (
      <div>
        {getFieldDec('uuname',{
          rules:[{required:true,message:'请输入用户名'}]
        })(<Input type='text' />)}
        {getFieldDec('pwd',{
          rules:[{required:true,message:'请输入密码'}]
        })(<Input type='password' />)}
        <Button onClick={this.onSubmit}>登录</Button>
      </div>
    )
  }
}

export default KFormTest