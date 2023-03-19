// 引入reactDom
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style/index.css'
// 引入App组件
import App from './App'
// Dom容器
const container = document.getElementById('App')

/*
  路由的基本使用
  1、安装路由  yarn add react-router-dom  or  npm install react-router-dom
  2、导航：为Link 表签  <Link to="/xxx">xxx</Link>
  3、展示：Route表签进行路由匹配 <Route path='/xxx' component={Xxx}/>
  4、单一路由器管理，给App组件外侧包裹一个  <BrowserRouter></BrowserRouter> 或者 <HashRouter></HashRouter> 
*/

const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
