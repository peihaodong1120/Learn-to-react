import React, { Component } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'
import './index.css'

export default class Search extends Component {

  state ={
    value:''
  }

  // https://api.github.com/search/users?q=xxxx

  handleValueChange = (event) =>{
    const { target } = event
    this.setState({value: target.value})
  }

  handleSearch= async () =>{
    try {
      const {value} = this.state
      this.props.getObj({
        isFirst:false,
        isLoading:true
      })
      const {data:{items}} = await axios.get('https://api.github.com/searchx/usersxxx?q=' + value)
  
      this.props.getObj({
        users: items,
        isLoading: false
      })
      
    } catch (error) {
      this.props.getObj({
        isLoading: false,
        error:error.message
      })
    }
  }


  render() {
    return (
      <div className='search'>
        <Input value={this.state.value}  onChange={this.handleValueChange} placeholder="Basic usage" /><Button onClick={this.handleSearch}  type="primary">搜索</Button>
      </div>
    )
  }
}
