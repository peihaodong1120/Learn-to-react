import React, { Component } from 'react'
import './style/index.css'
import Search from './component/Search/index.jsx' 
import List from './component/List/index.jsx' 

class App extends Component {

  state = {
    users:[],
    isFirst: true,
    isLoading: false,
    isErr: false
  }

  getObj= (stateObj) =>{
    this.setState(stateObj)
  }


  render() {
    return (
      <div className='app'>
        <Search getObj={this.getObj} />
        <List data={this.state} />
      </div>
    )
  }
}

export default App
