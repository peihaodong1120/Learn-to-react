// 引入reactDom
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style/index.less'
// 引入App组件
import App from './App'

// import store from './redux/store'
// Dom容器
const container = document.getElementById('App')


const root = createRoot(container) // createRoot(container!) if you use TypeScript
// 监测redux中状态的改变使用 store.subscribe
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
