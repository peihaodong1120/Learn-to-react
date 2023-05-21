import React, { Component } from 'react'
import { Button,Space,Select } from 'antd';
class Count extends Component {
  state = {
    defaultValue:1,
  }
  handleChange = (val) =>{
    this.setState({defaultValue: val})
  }

  handleClick = (type, e) =>{
    const {defaultValue} = this.state
    switch (type) {
      case 'add':
        this.props.handleAdd(defaultValue*1)
        break;
      case 'subtract':
        this.props.handleSubtiaction(defaultValue*1)
        break;
      case 'odd':
        if (this.props.count % 2 !== 0) {
          this.props.handleAdd(defaultValue*1)
        }
        break;
      case 'async':
        this.props.handleAddAsync(defaultValue*1)
        break;
      default:
        break;
    }
  }

  render() {
    const {defaultValue} = this.state
    return (
      <div className="app">
        <div>总和为:{this.props.count}</div>
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

export default Count
