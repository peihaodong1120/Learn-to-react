# React学习

### 路由

#### React-router5以下

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



#### React-router6

##### 1、注册路由组件

- 使用Routes代替 Switch ，使用element 代替component

```jsx
import {Routes, Route} from 'react-router-dom'
<Routes>
	<Route path='/home' element={<Home/>}></Route> 
</Routes>
```

##### 2、路由重定向

- 使用Navigate组件代替Redirect

```jsx
import {Routes, Route, Navigate} from 'react-router-dom'
<Routes>
	{/* react6 路由重定向，/默认访问 home组件 */}
  <Route path='/' element={<Navigate to={'/home'}/>} ></Route>
  {/* 组册路由组件 */}
   <Route path='/home' element={<Home />}></Route>
   <Route path='/about' element={<About />}></Route>
</Routes>
```

##### 3、NavLink高亮效果

- NavLink的className需要传入一个函数。代替activeClassName

```jsx
// 传入一个函数，函数会得到一个isActive：true 或者 isActive：false 字段。通过isActive判断是否添加高亮类名。要将类名返回出去
<NavLink className={({isActive}) => isActive? 'item isActive': 'item'} to={'/home'}>
```

##### 4、useRoutes Hook

- 可以使用路由表代替组件式路由

```jsx
import {useRouters Navigate} from 'react-router-dom'

// 定义路由表一般在 src/Router/index 中， 导出
const routers = [
    {
        path:'/',
        element: <Navigate to={'/home'}/> // 路由重定向
    },
    {
        path:'/home',
        element: <Home/>
    },
    {
        path:'/about',
        element: <About/>
    },
]

// 使用路由 在组件中， 使用useRouters
const App = () =>{
  const element = useRouters(routers)
  return (
  	<div>
      {element}
    </div>
  )
}
```



### redux

一个专门做状态管理的js库

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

##### 1、setState的2种写法

-  setState(statechange, [callback]） ----对象式 

  - statechange为状态改变对象（该对象可以体现出状态的更改）
  - ca11back是可选的回调函数，它在状态更新完毕、界面也更新后 (render调用后)才被调用

  ```jsx
  this.setState({count:this.state.count + 1}, ()=>{
      // render执行后执行该函数，recat数据更新是异步的，这里可以拿到最新的数据
      console.log('对象式回调函数', this.state.count);
  })
  ```

-  setState(updater, [callback]） ----函数式

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



##### 3、常用Hooks

*Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。(在函数式组件中使用)

- ​	state Hook

```jsx
import React, {useState} from "react"; // 
import {Button} from 'antd'

// 函数式组件
const Demo = function() {
    // useState(初始化值)  会返回两个元素的数组，第一元素是初始化的值，第二个元素是改变状态的函数
    const [count, setCount] = useState(0); 
    const [data,setData] = useState({   // 和vue3的reactive非常相似
        a:1,
        b:{
            name:'章三'
        }
    })
    const handleCountAdd = () =>{
        // setCount(count+1) // 写法1
        // 写法2，传入一个函数，函数参数是上一次的状态
        setCount((count)=>{
            return count + 1
        })
        console.log(data);
        setData({a:2})
    }

    return (
        <div>
            <h1>总数{count}</h1>
            <Button onClick={handleCountAdd}>点击➕1</Button>
        </div>
    )
}

export default Demo
```

- effect Hook

  Effect Hook 可以让你在函数组件中执行副作用操作

```jsx
import React, {useState, useEffect} from "react"; // 
import {Button} from 'antd'
// 函数式组件
const Demo = function() {
    const [count, setCount] = useState(0); 
    // Effect Hook 可以让你在函数组件中执行副作用操作
    // Effect Hook 可以看作componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个生命周期钩子
    useEffect(()=>{
        // 可以做任何副作用操作
      	// 页面渲染，开启定时器
        let timer = setInterval(()=>{
            setCount(count=> count+ 1)
        }, 10000)
        return () =>{
            // 返回一个函数，这个函数在组件卸载前执行
          	// 页面卸载之前，关闭定时器
            clearInterval(timer)
        }
    },[]) // 如果制定空数组，useEffect的回调函数只在第一次render执行后执行，如果指定state状态，指定哪个状态，状态改变就会执行回调
    const handleCountAdd = () =>{
        setCount((count)=>{
            return count + 1
        })
    }

    return (
        <div>
            <h1>总数{count}</h1> 
            <Button onClick={handleCountAdd}>点击➕1</Button>
        </div>
    )
}

export default Demo
```

- ref Hook

```jsx
import React, {useState, useRef} from "react"; // 引入useRef
import {Button, Input, message} from 'antd'
// 函数式组件
const Demo = function() {
    const [count, setCount] = useState(0); 
    const [messageApi, contextHolder] = message.useMessage()
    const myRef = useRef() // 使用

    const handleCountAdd = () =>{
        setCount((count)=>{
            return count + 1
        })
    }
    const handleChange = () =>{
        console.log(myRef);
        // 获取ref内容
        messageApi.info(myRef.current.input.value)
    }

    return (
        <div>
            {contextHolder}
            <h1>总数{count}</h1>
            <Input ref={myRef} placeholder="请输入内容"></Input> {/*使用ref*/}
            <Button onClick={handleCountAdd}>点击➕1</Button>
            <Button onClick={handleChange}>点击弹出input内容</Button>
        </div>
    )
}

export default Demo
```

##### 4、Fragment

- 类似vue的template， 但是Fragment不会转换为真实的dom节点。
- 有一个key属性，可以进行遍历循环操作

##### 5、context

- 组件隔代通讯。祖组件向子孙组件传递数据
- 引入createContext

```jsx
import React, {Component, createContext, Fragment} from "react";
```

- 创建context对象， 必须创建在所有组件都能接触到公共区域

```jsx
// 创建一个context对象
const MyContext = createContext()
```

- 使用 `MyContext.Provider`包裹祖先组件进行传递，并且`MyContext.Provider`接收一个value属性传递给消费组件

```jsx
// 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
const {Provider} = MyContext 

{/* 使用Provider组件包裹消费组件，多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。 */}
<Provider value={{name, age}}>
   <AA/>
</Provider>
```

- 消费（子孙）组件使用传递过来的数据

  - 类式组件

  ```jsx
  class BB extends Component {
      // 消费组件静态属性contextType赋值创建的context对象
      static contextType = MyContext;
      render() {
          // 然后可以在this.context获取到祖先组件传递过来的数据
          console.log('组件BB',this.context);
          const {name, age} = this.context
          return (
              <Fragment>
                  <div className="progeny1">
                      <h3>孙子组件</h3>
                      <h4>我的名字叫：{name}, 年龄：{age}</h4>
                  </div>
              </Fragment>
          )
      }
  }
  ```

  - 函数式组件

  ```jsx
  const {Consumer} = MyContext
  
  function CC() {
      return (
          <Fragment>
              <div className="progeny2">
                  <h3>孙子组件</h3>
                  {/* 函数式组件，要使用context对象中的Consumer来接收传递的数据 */}
                  <Consumer>
                      {value => {
                          console.log('组件CC', value)
                          return <h4>我的名字叫：{value.name},年龄：{value.age}</h4>
                      }}
                  </Consumer>
                  
              </div>
          </Fragment>
      )
  }
  ```

##### 6、组件优化

- 使用PureComponent代替Component。会对state和props进行浅比较据改变才会调用render重新渲染页面

```jsx
class Demo extends PureComponent{
	render() {
		return(
			<div></div>
		)
	}
}
```

##### 7、renderProps（插槽）

- 和vue中的slot非常相似，都是在一个组件内预留位置，可以传入任意结构灵活渲染组件

  - childrenProps

  ```jsx
  // 通过组件标签体传入结构。
  <BB>
    <CC age={age}></CC>
  </BB>
  
  // 组件BB内渲染CC组件， 只能渲染，CC组件不能拿到BB组件的数据
  {this.props.children}
  ```

  - renderProps

  ```jsx
  // 通过标签属性传入结构。一般用render
  <BB render={(name)=> <CC name={name}/>} />
  
  // 组件BB内渲染CC组件， 并且可以给CC组件传递数据
  {this.props.render(' 张三')}
  ```

##### 8、错误边界

- 错误边界（Error Boundaries），用来捕获后代组件错误。渲染备用页面
- 特点：只能捕获后代组件生命周期产生的错误，主要捕获render中产生的错误
- getDerivedStateFromError 配合 componentDidCatch使用

```jsx
// 捕获错误
static getDerivedStateFromError(error) {
   console.log('@@2',error);
   return {
     hasError: true
   }
}
// 统计错误次数，通知服务端
componentDidCatch(error, info){
  console.log('xxxx', error, info);
}
```

