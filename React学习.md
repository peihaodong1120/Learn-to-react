# React学习



### 路由

##### 1、路由传参

- params传参

  - 声明传递， 在to路由路径上声明传递参数

  ```jsx
  // 声明式导航
  <Link to={`/home/message/details/${item.id}/${item.label}`}>{item.label}</Link>
  <Link to={`/home/message/details/1/标题`}>{item.label}</Link>
  
  //编程式导航
  this.props.history.push('/home/message/details/1/biaoti')
  ```

  - 注册路由组件接收

  ```jsx
  <Route path='/home/message/details/:id/:title' component={Details}></Route> 
  ```

  - 组件内部获取，`this.props.match.params`获取

  ```jsx
  render() {
  	const {id, title} = this.props.match.params
  	return (
  		<div>
  			<span>{id}</span><span>{title}</span>
  		</div>
  	)
  }
  ```

  - 优缺点
    - 优点：页面刷新，参数依然存在
    - 缺点：只能传递字符串，并且参数过多时url会变的又长又臭

- search传参

  - 在路由上声明参数

  ```jsx
  // 声明式导航
  <Link to={`/home/message/details?$id={item.id}&title=${item.label}`}>{item.label}</Link>
  <Link to={`/home/message/details?id=1&title=2`}>{item.label}</Link>
  
  // 编程式导航
  this.props.history.push({pathname:'/home/message/details',search:'?id=1&title=2'})
  ```

  - 注册路由组件时无需做任何事

  ```jsx
  <Route path='/home/message/details' component={Details}></Route> 
  ```

  - 在组件内获取，`this.props.location.search`获取，但是获取的是urlencode形式的参数，需要用qs转换成对象

  ```jsx
  import qs from 'qs' // react安装时候会自动安装qs
  
  render() {
    const str = this.props.location.search
  	const {id, title} = qs.parse(str.slice(1)) // 去掉？转换对象
  	return (
  		<div>
  			<span>{id}</span><span>{title}</span>
  		</div>
  	)
  }
  ```

- query传参

  - 声明路由时

  ```jsx
  // 声明式导航
  <Link to={{pathname:'/home/message/details',query:{id:item.id, title:item.label}}}>{item.label}</Link>
  
  // 编程式导航
  this.props.history.push({pathname:'/home/message/details',query:{id:1, title:2}})
  ```

  - 注册路由组件时无需做任何事

  ```jsx
  <Route path='/home/message/details' component={Details}></Route> 
  ```

  - 在组件内获取，`this.props.location.query`获取

  ```jsx
  render() {
  	const {id, title} = this.props.location.query
  	return (
  		<div>
  			<span>{id}</span><span>{title}</span>
  		</div>
  	)
  }
  ```

  - 优缺点
    - 优点：传参优雅，传递参数可传对象（明文）
    - 缺点：刷新地址栏，参数丢失（不管是hash方式，还是Browser模式都会丢失参数）

- state传参

  - 声明路由时

  ```jsx
  // 声明式导航
  <Link to={{pathname:'/home/message/details',state:{id:item.id, title:item.label}}}>{item.label}</Link>
  
  // 编程式导航
  this.props.history.push({pathname:'/home/message/details',state:{id:1, title:2}})
  ```

  - 注册路由时无需做任何事

  ```jsx
  <Route path='/home/message/details' component={Details}></Route> 
  ```

  - 在组件内获取，`this.props.location.state`获取

  ```jsx
  render() {
  	const {id, title} = this.props.location.state
  	return (
  		<div>
  			<span>{id}</span><span>{title}</span>
  		</div>
  	)
  }
  ```

  - 优缺点
    - 优点：优雅传参，传递参数可传对象（加密）
    - 缺点：刷新地址栏hash方式会丢失参数，browser模式不会

##### 2、widthRouter

- ​	在一般组件中进行路由跳转操作的时候，就要使用widthRouter方法

```jsx
import React, {Component} from "react";
// 在一般组件中引入withRouter
import {withRouter} from 'react-router-dom'

class Header extends Component {

    handelUrlChange = (type) =>{
        switch (type) {
            case 'to':
                this.props.history.push('/home/message')
                break;
            case 'back':
                this.props.history.goBack(-1)
                break;
            case 'replace':
                this.props.history.replace('/home')
                break;
            default:
                break;
        }
    }

    render() {
         console.log('Header',this.props);
        return (
            <div>
                <h2>Reack-Router</h2>
                <div>
                    <button onClick={()=>{this.handelUrlChange('to')}}>前进</button>
                    <button onClick={()=>{this.handelUrlChange('back')}}>后退</button>
                    <button onClick={()=>{this.handelUrlChange('replace')}}>刷新替换</button>
                </div>
            </div>
        )
     }
}

// 在导出时候使用widthRouter可以使一般组件变成路由组件，从而让一般组件可以进行路由跳转操作
export default withRouter(Header)
```



### redux

##### 1、基本使用