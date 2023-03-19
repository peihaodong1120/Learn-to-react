import React, { Component } from 'react'
import Item from '../Item/index'

// 消息订阅与发布 使用这个库 https://github.com/mroderick/PubSubJS
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {
    users:[],
    isFirst: true,
    isLoading: false,
    isErr: false,
  }

    componentDidMount() {
      // 订阅消息， 订阅名为myData的消息 PubSub.subscribe 返回一个id 用于解绑消息订阅
      this.token =  PubSub.subscribe('myData', (msg, data) =>{
        // msg 消息名称， data 传递的数据
        console.log(data);
        this.setState(data)
      })
    }

  componentWillUnmount() {
    // 解绑消息订阅
    PubSub.unsubscribe(this.token)
  }
  render() {
    const {users, isFirst, isLoading, isErr} = this.state
    return (
      <div className='List'>
          {
            isFirst ? <h2>第一次进入</h2> :
            isLoading? <h2>Lading......</h2> :
            isErr? <h2>{isErr}</h2> :
            users.map(item =>{
              return <Item key={item.id} user={item}/>
            })
          }
      </div>
    )
  }
}
