import React,{Component} from 'react'
import logo from '../logo.svg'
import style from '../index.module.css'

export default class JsxTest extends Component{
  render(){
    const name='react study'
    return (
      <div>
        {name}
        <img src={logo} alt='' className={style.img} />
      </div>
    )
  }
}