import React, { Component } from 'react'
import './style/index.css'
import Demo from './components/_renderProps'
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
