import React, { Component } from 'react'
import './index.css'
import {Link, Route} from 'react-router-dom'
import About from '../view/About'
import Home from '../view/Home'
export default class Layout extends Component {

  handleIsActive = () =>{

  }

  render() {
    return (
      <div className='main'>
        <div className='header'>
          <h2>Reack-Router</h2>
        </div>
        <div className='conxxx'>
          <div className='left'>
            {/* 在React中靠路由链接实现切换组件 编写路由链接 */}
            <Link to={'/about'}>
              <div className='itme'>
                About
              </div>
            </Link> 
            <Link to={'/home'}>
              <div className='itme'>
                Home
              </div>
            </Link>

          </div>
          <div className='rigit'>
            {/* 注册路由 */}
              <Route path='/about' component={About} />
              <Route path='/home' component={Home} />
          </div>
        </div>
      </div>
    )
  }
}
