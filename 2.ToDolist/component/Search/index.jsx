import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { Input } from 'antd'
import './index.css'
export default class Search extends Component {

  state  = {
    value:''
  }

  handleSearch = (event) =>{
    const {keyCode, target } = event
    const { value } = this.state
    // 当按下回车的时候， 传递给父组件value值
    if (keyCode !== 13) return
    if (target.value.trim() === '') return
    this.props.handleKeyDown({id:nanoid(), name:target.value, done:false})

    this.setState({value:''})
  }

  render() {
    return (
      <div className='search'>
        {/* 键盘事件 */}
        <Input onKeyUp={this.handleSearch} placeholder="ToDo"  value={this.state.value}/>
      </div>
    )
  }
}
