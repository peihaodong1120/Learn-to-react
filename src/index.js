// 引入reactDom
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style/index.css'
// 引入App组件
import App from './App'
// Dom容器
const container = document.getElementById('App')

/*
 NavLink 可以实现路由链接的高亮，通过activeClassName 指定样式名
 标签体内容是一个特殊的表签属性，可以通过this.props,children获取表签体内容
*/

const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
