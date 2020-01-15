import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addComment} from '../store/reducer'

class CommentInput extends Component{
  constructor(){
    super()
    this.state={
      username:'liwei',
      content:'test'
    }
  }
  render(){
    return (
      <div>
        <div>
          <span>用户姓名：</span>
          <input 
            value={this.state.username} 
            onChange={this.handleUsernameChange.bind(this)}
          />
        </div>
        <div>
          <span>评论内容：</span>
          <textarea 
            value={this.state.content}
            onChange={this.handleContentChange.bind(this)}
          />
        </div>
        <button onClick={this.handleSubmit.bind(this)}>提交</button>        
      </div>
    )
  }
  handleUsernameChange(e){
    this.setState({
      username:e.target.value
    })
  }
  handleContentChange(e){
    this.setState({
      content:e.target.value
    })
  }
  handleSubmit(){
    let comments=JSON.parse(localStorage.getItem('comments'))||[]  
    console.log(comments)   
    comments.push({
      username:this.state.username,
      content:this.state.content
    })
    localStorage.setItem('comments',JSON.stringify(comments))
    this.props.addComment({
      username:this.state.username,
      content:this.state.content
    })
  }
}


const mapStateToProps=(state)=>{
  return {comments:state.comments}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addComment:(comment)=>{
      dispatch(addComment(comment))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentInput)