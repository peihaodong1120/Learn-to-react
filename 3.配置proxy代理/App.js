import React, { Component } from 'react'
import axios from 'axios'

/*
  配置代理1 在package.json 中配置proxy  缺点：只能配置一个代理
  "proxy": "http://localhost:5000"

*/

class App extends Component {
  getData = () => {
    axios
      .get('http://localhost:3000/api1/studes')
      .then(res => {
        console.log('http://localhost:3000/api1/studes', res)
      })
      .catch(err => {
        console.log('err', err)
      })
  }
  getCarData = () => {
    axios
      .get('http://localhost:3000/api2/cars')
      .then(res => {
        console.log('http://localhost:3002/cars', res)
      })
      .catch(err => {
        console.log('err', err)
      })
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>请求学生信息</button>
        <br />
        <br />
        <button onClick={this.getCarData}>请求汽车信息</button>
      </div>
    )
  }
}

export default App
