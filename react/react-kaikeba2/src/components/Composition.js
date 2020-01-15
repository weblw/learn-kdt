import React from 'react'

// Dialog定义组件外观和行为
function Dialog(props){
  return <div style={{border:'1px sloid blue'}}>{props.children}</div>
}

export default function Composition(){
  return (
    <div>
      {/* 传入显示内容 */}
      <Dialog>
        <h1>组件复合</h1>
        <p>组件复合给与你足够的弥姐姓去定义外观和行为</p>
      </Dialog>
    </div>
  )
}