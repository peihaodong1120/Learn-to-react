import React, { Component } from 'react'
import './style/index.less'
import Demo from './components/_lazy'
class App extends Component {

  render() {
    return (
      <div className="app">
        <Demo a={10}></Demo>
      </div>
    )
  }
}

export default App
