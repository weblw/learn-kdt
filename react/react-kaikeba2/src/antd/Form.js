import React from 'react'
import {Form,Icon,Input,Button} from 'antd'

class NormalLoginForm extends React.Component{
  handleSubmit=e=>{
    e.preventDefault();
    this.props.form.validateFields((err,values)=>{
      if(!err){
        console.log('Received Values of form:',values)
      }
    })
  }
  render(){
    const {getFieldDecorator}=this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <Form.Item>
          {getFieldDecorator('username',{
            rules:[{required:true,message:'用户名不能为空'}]
          })(
            <Input
              prefix={<Icon type='user' style={{color:'rgab(0,0,0,.25)'}} />}
              placeholder='请输入用户名'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password',{
            rules:[{required:true,message:'密码不能为空'}]
          })(
            <Input
              prefix={<Icon type='lock' style={{color:'rgab(0,0,0,.25)'}} />}
              type='password'
              placeholder='请输入密码'
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrapperNormalLoginFrom=Form.create({name:'normal_login'})(NormalLoginForm)

export default WrapperNormalLoginFrom