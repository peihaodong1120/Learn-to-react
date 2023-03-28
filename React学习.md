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

- 初始化redux： 装包、建立文件夹初始化redux文件
- 使用redux

```js
import { createStore } from 'redux'

/**
 * 这是一个 reducer 函数：接受当前 state 值和描述“发生了什么”的 action 对象，它返回一个新的 state 值。
 * reducer 函数签名是 : (state, action) => newState
 *
 * Redux state 应该只包含普通的 JS 对象、数组和原语。
 * 根状态值通常是一个对象。 重要的是，不应该改变 state 对象，而是在 state 发生变化时返回一个新对象。
 *
 * 你可以在 reducer 中使用任何条件逻辑。 在这个例子中，我们使用了 switch 语句，但这不是必需的。
 * 
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

// 创建一个包含应用程序 state 的 Redux store。
// 它的 API 有 { subscribe, dispatch, getState }.
let store = createStore(counterReducer)

// 你可以使用 subscribe() 来更新 UI 以响应 state 的更改。
// 通常你会使用视图绑定库（例如 React Redux）而不是直接使用 subscribe()。
// 可能还有其他用例对 subscribe 也有帮助。

store.subscribe(() => console.log(store.getState()))

// 改变内部状态的唯一方法是 dispatch 一个 action。
// 这些 action 可以被序列化、记录或存储，然后再重放。
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
```



### 扩展

##### 1、setState更新状态的2种写法

-  setState(statechange, [callback]） ----对象式 

  - statechange为状态改变对象（该对象可以体现出状态的更改）
  - ca11back是可选的回调函数，它在状态更新完毕、界面也更新后 (render调用后)才被调用

  ```jsx
  this.setState({count:this.state.count + 1}, ()=>{
      // render执行后执行该函数，recat数据更新是异步的，这里可以拿到最新的数据
      console.log('对象式回调函数', this.state.count);
  })
  ```

-  setState(updater, [callback]） ----对象式 

  - updater为返回statechange对象的函数
  - updater可以接收到state和props
  - ca11back是可选的回调函数，它在状态更新完毕、界面也更新后 (render调用后)才被调用

  ```jsx
   this.setState((state, props) =>{
                  console.log('函数式更新状态',state, props);
                  return {count: state.count + props.a}
              },()=>{
                  // render执行后执行该函数，recat数据更新是异步的，这里可以拿到最新的数据
                  console.log('函数式回调函数', this.state.count);
              })
  ```

- 总结

  - 对象式的setstate是函数式的setstate的简写方式(语法糖）
  - 更新状态不依赖于原状态，使用对象式
  - 更新状态依赖于原状态，使用函数式

##### 2、lazy 懒加载

- 在路由组件中引入lazy函数并且使用懒加载

```jsx
import React, {Component, lazy, Suspense} from 'react' // 引入懒加载函数， 使用懒加载必须使用Suspense组件
import {Link, Route} from 'react-router-dom'
import Loading from './loading'

// 路由组件懒加载引入方式
const Home = lazy(()=> import('./home'))
const Message = lazy(()=> import('./message'))

export default class Demo extends Component {
    render() {
        return(
            <div>
                <h1>header</h1>
                <div>
                    <Link to={'/home'}>home页面</Link>
                    <Link to={'/message'}>message页面</Link>
                </div>
                <div>
          // 在注册懒加载组件的时候，必须使用Suspense组件指定一个默认组件。这个组件是在路由组件因网络等原因无法加载出来时显示的
                <Suspense fallback={<Loading/>}>
                    <Route path={'/home'} component={Home}></Route>
                    <Route path={'/message'} component={Message}></Route>
                </Suspense>
                </div>
            </div>
        )
    }
}
```

