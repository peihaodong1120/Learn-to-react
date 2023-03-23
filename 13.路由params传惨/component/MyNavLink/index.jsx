import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      <div>
          <NavLink activeClassName='isActive' className='item' {...this.props} />
      </div>
    )
  }
}
