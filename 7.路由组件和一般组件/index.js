// 引入reactDom
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style/index.css'
// 引入App组件
import App from './App'
// Dom容器
const container = document.getElementById('App')




const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
)
