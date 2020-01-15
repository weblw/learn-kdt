import React,{Component} from 'react'
import {connect} from 'react-redux'
import {initComments,deleteComment} from '../store/reducer'

class CommentInput extends Component{
  render(){
    return (
      <div>
        {this.props.comments.map((item,i)=>(
          <div key={i}>
            <span>{i+1}</span>
            <span>用户名：{item.username}</span>
            <span style={{color:'red',marginLeft:'20px'}}>评论内容：{item.content}</span>
            <span 
              style={{color:'blue',marginLeft:'20px',cursor:'pointer'}}
              onClick={this.handleDelete.bind(this,i)}
            >删除</span>
          </div>
        ))}
      </div>
    )
  }
  componentWillMount(){
    let comments=JSON.parse(localStorage.getItem('comments'))||[]
    this.setState({comments})
    this.props.initComments(comments)
  }
  handleDelete(i){
    let comments=JSON.parse(localStorage.getItem('comments'))||[]
    let newComments=[
      ...comments.slice(0,i),
      ...comments.slice(i+1)
    ]
    localStorage.setItem('comments',JSON.stringify(newComments))
    this.props.deleteComment(i)
  }
}

const mapStateToProps=(state)=>{
  return {comments:state.comments}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    initComments:(comments)=>{
      dispatch(initComments(comments))
    },
    deleteComment:(index)=>{
      dispatch(deleteComment(index))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentInput)