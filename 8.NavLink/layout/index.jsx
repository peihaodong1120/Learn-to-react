import React, { Component } from 'react'
import './index.css'
import {NavLink, Route} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Hello from '../component/Hello'
export default class Layout extends Component {

  handleIsActive = () =>{

  }

  render() {
    return (
      <div className='main'>
        <div className='header'>
          <h2>Reack-Router</h2>
          {/* 一般组件，正常引入，正常使用 */}
          <Hello a={'abcdefg'} /> 
        </div>
        <div className='conxxx'>
          <div className='left'>
            {/* 在React中靠路由链接实现切换组件 编写路由链接 */}
            {/* NavLink 点击高亮效果， 给activeClassName属性添加高亮的类名即可 */}
            <NavLink activeClassName='isActive' className='item' to={'/about'}>
                About
            </NavLink> 
            <NavLink activeClassName='isActive' className='item' to={'/home'}>
                Home
            </NavLink>

          </div>
          <div className='rigit'>
            {/* 注册路由 */}
            {/* 路由组件， 使用Route注册 */}
              <Route path='/about' component={About} />
              <Route path='/home' component={Home} />
          </div>
        </div>
      </div>
    )
  }
}
