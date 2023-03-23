import React, { Component } from 'react'
import './index.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Test from '../pages/Test'
import MyNavLink from '../component/MyNavLink'
export default class Layout extends Component {

  handleIsActive = () =>{

  }

  render() {
    console.log('x', this.props, this.props.children, 'react中可以使用this.props.children得到表签体内容');
    return (
      <div className='main'>
        <div className='header'>
          <h2>Reack-Router</h2>
        </div>
        <div className='conxxx'>
          <div className='left'>
            {/* 在React中靠路由链接实现切换组件 编写路由链接 */}
            {/* 封装NavLink */}
            <MyNavLink to='/about' a={1} b={2}>About</MyNavLink>
            <MyNavLink to='/home'>Home</MyNavLink>
            <MyNavLink to='/test'>test</MyNavLink>
          </div>
          <div className='rigit'>
            {/* 注册路由 */}
            {/* 路由组件， 使用Route注册 */}
            {/* 使用Switch包裹路由，可以提高路由匹配效率 */}
            {/* 属性exact可以开启路由的严格匹配 严格匹配一般情况用不到 */}
            <Switch>
              <Route path='/about' component={About} />
              <Route path='/home' component={Home} />
              <Route exact path='/test' component={Test} />
              {/* 路由重定向，当所有路由都匹配不上的时候，就会跳转到redirect上的路径 */}
              <Redirect to='/about' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
