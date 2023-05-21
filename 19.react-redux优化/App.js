import React, { Component } from 'react'
import './style/index.less'
import Count from './containers/Count/index'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Count/>
      </div>
    )
  }
}

export default App
