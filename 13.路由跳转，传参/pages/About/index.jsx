import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('路由组件 props', this.props);
    return (
      <div>
        <h1> About </h1>
      </div>
    )
  }
}
