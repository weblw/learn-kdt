import React from 'react'

// 获取相应部分内容展示在指定位置
function Dialog(props){
  // 备选消息
  const message={
    'foo':{title:'foo',content:'foo~'},
    'bar':{title:'bar',content:'bar~'}
  }
  // 执行函数获得要显示的内容
  const {body,footer}=props.children(message[props.msg])
  return (
    <div>
      {/* 此处显示的内容是动态生成的 */}
      {body}
      <div>{footer}</div>
    </div>
  )
}

export default function Composition(){
  return (
    <div>
      {/* 执行显示消息的key */}
      <Dialog msg='bar'>
        {/* 修改为函数形式，根据传入值生成最终内容 */}
        {({title,content})=>({
          body:(
            <>
              <h1>{title}</h1>
              <p>{content}</p>
            </>
          ),
          footer:<button onClick={()=>alert('react确实好')}>确定</button>
        })}
      </Dialog>
    </div>
  )
}