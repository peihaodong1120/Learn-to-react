import React, { Component } from 'react'
import './style/index.less'
import Count from './containers/Count/index'
import Person from './containers/Person'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Count/>
        <hr />
        <Person />
      </div>
    )
  }
}

export default App
