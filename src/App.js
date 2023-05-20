import React, { Component } from 'react'
import './style/index.less'
import Count from './container/Count/index'
import store from './redux/store'
class App extends Component {
  render() {
    return (
      <div className="app">
        {/* 给容器组件传递store */}
        <Count store={store} />
      </div>
    )
  }
}

export default App
