import React from 'react'
import ReactDom from 'react-dom'

// const name='react study'
// const jsx=<h2>{name}</h2>
// const user={firstName:'tom',lastName:'jerry'}
// function formatNamne(user){
//   return user.firstName+' '+user.lastName
// }
// const jsx=<h2>{formatNamne(user)}</h2>
// const greet=<p>hello,jerry</p>
// const jsx=<h2>{greet}</h2>
// const showTitle=false
// const title=showTitle ? <h2>{name}</h2> : null
// const jsx=(
//   <div>
//     {title}
//   </div>
// )
// const arr=[1,2,3].map(num=><li key={num}>{num}</li>)
// const jsx=(
//   <div>
//     <ul>{arr}</ul>
//   </div>
// )
// import logo from './logo.svg'
// import style from './index.module.css'
// const jsx=(
//   <div>
//     <img src={logo} alt='' style={{width:100}} className={style.img}/>
//   </div>
// )
import App from './App'

ReactDom.render(
  <App title='开课吧真不错'/>,
  document.getElementById('root')
)