import React, { Component } from 'react'
import './index.css'
import Item from '../Item/index'

export default class List extends Component {
  render() {
    const {data:{users, isFirst, isLoading, isErr}} = this.props
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
