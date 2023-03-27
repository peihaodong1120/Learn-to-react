import React, { Component } from 'react'
import './style/index.less'
import { Button,Space,Select } from 'antd';
import store from './redux/store'
class App extends Component {
  state = {
    defaultValue:1,
  }
  
  componentDidMount() {
    // 检测redux状态变化，更新Dom
    store.subscribe(()=>{
      this.setState({})
    })
  }

  handleChange = (val) =>{
    this.setState({defaultValue: val})
  }

  handleClick = (type, e) =>{
    const {defaultValue} = this.state
    switch (type) {
      case 'add':
      case 'subtract':
        store.dispatch({
          type,
          data: defaultValue
        })
        break;
      case 'odd':
        const count = store.getState()
          if (count % 2 !== 0) {
            store.dispatch({
              type: 'add',
              data: defaultValue
            })
          }
        break;
      case 'async':
          setTimeout(() =>{
            store.dispatch({
              type: 'add',
              data: defaultValue
            })
          }, 1000)
        break;
      default:
        break;
    }
  }

  render() {
    const {defaultValue} = this.state
    return (
      <div className="app">
        <div>总和为{store.getState()}</div>
        <div style={{'marginBottom': 20+'px','marginTop': 20+'px'}}>
          <Space>
            <Select
                defaultValue={defaultValue}
                style={{ width: 120 }}
                onChange={this.handleChange}
                options={[
                  { value: 1, label: 1 },
                  { value: 2, label: 2 },
                  { value: 3, label: 3 },
                  { value: 4, label: 4 },
                ]}
              />
          </Space>
        </div>
        <Space>
          <Button type="primary" onClick={(e)=>{this.handleClick('add')}}>加</Button>
          <Button onClick={()=>{this.handleClick('subtract')}}>减</Button>
          <Button type="dashed" onClick={()=>{this.handleClick('odd')}}>奇数加</Button>
          <Button type="dashed" onClick={()=>{this.handleClick('async')}}>异步加</Button>
        </Space>
      </div>
    )
  }
}

export default App
