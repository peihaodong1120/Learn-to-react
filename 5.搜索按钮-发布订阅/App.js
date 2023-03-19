import React, { Component } from 'react'
import './style/index.css'
import Search from './component/Search/index.jsx'
import List from './component/List/index.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Search />
        <List />
      </div>
    )
  }
}

export default App
