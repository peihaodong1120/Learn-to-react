import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    const {user} = this.props
    return (
      <div className='item'>
          <img src={user.avatar_url} alt="1" />
          <p>{user.login}</p>
      </div>
    )
  }
}
