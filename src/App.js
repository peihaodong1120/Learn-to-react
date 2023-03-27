import React, { Component } from 'react'
import './style/index.less'
import { Button,Space } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Space>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
      </div>
    )
  }
}

export default App
