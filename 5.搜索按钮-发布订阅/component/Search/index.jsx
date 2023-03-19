import React, { Component } from 'react'
import { Input, Button } from 'antd'
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.css'

export default class Search extends Component {

  state ={
    value:''
  }

  // componentDidMount() {
  //   PubSub.publish('myData', 'hello world!');
  // }




  handleValueChange = (event) =>{
    const { target } = event
    this.setState({value: target.value})
  }

  handleSearch= async () =>{
    try {
      const {value} = this.state

      // 消息发布 PubSub.publish
      PubSub.publish('myData', {
        isFirst:false,
        isLoading:true
      });
      const {data:{items}} = await axios.get('https://api.github.com/search/users?q=' + value)

      PubSub.publish('myData', {
        users: items,
        isLoading: false
      });
      
    } catch (error) {
      PubSub.publish('myData', {
        isLoading: false,
        error:error.message
      });
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
