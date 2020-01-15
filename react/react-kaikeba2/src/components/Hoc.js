import React from 'react'

// Lesson保证功能单一，它不关心数据来源，只负责展示
function Lesson(props){
  return (
    <div>
      {props.stage}-{props.title}
    </div>
  )
}

// 模拟数据
const lessonData=[
  {stage:'React',title:'核心API'},
  {stage:'React',title:'组件1'},
  {stage:'React',title:'组件2'},
  {stage:'React',title:'组件3'},
  {stage:'React',title:'组件4'}
]

// 高阶组件withContent负责包装传入组件Comp
// 包装之后组件能够根据传入索引获取数据，真实案例中可以通过api查询获取数据
const withContent=Comp=>props=>{
  const content=lessonData[props.idx]
  // {...props}将属性展开传递下去
  return <Comp {...content} />
}

// LessonWithContent是包装后的组件
const LessonWithContent=withContent(Lesson)

export default function HocTest(){
  // HocTest渲染三个LessonWithContent组件
  return (
    <div>
      {[0,0,0].map((item,idx)=>(
        <LessonWithContent idx={idx} key={idx} />
      ))}
    </div>
  )
}