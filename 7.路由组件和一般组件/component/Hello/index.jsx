import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    console.log('一般组件的props', this.props);
    return (
      <div>一般组件</div>
    )
  }
}
