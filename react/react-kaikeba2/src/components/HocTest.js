import React,{Component} from 'react'

// Lesson保证功能单一，只负责展示数据
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

// withContent高阶组件，给Lesson组件传递数据
// const withContent=Comp=>props=>{
//   const content=lessonData[props.index]
//   return <Comp {...content} />
// }

// const withContent=function(Comp){
//   return function(props){
//     const content=lessonData[props.index]
//     return <Comp {...content} />
//   }
// }

const withContent=Comp=>props=>{
  const content=lessonData[props.index]
  return <Comp {...content} />
}

// withLog负责包装组件，使其在挂在时能够打印日志
const withLog=Comp=>{
  // 返回组件需要生命周期，因此要声明为class组件
  return class extends Component{
    render(){
      return <Comp {...this.props} />
    }
    componentDidMount(){
      console.log('didMount',this.props)
    }
  }
}

// LessonWithContent是包装后的组件
const LessonWithContent=withLog(withContent(Lesson))

export default function HocTest(){
  return (
    <div>
      {[0,0,0,0,0].map((item,index)=>(
        <LessonWithContent index={index} key={index} />
      ))}
    </div>
  )
}