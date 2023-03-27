import React, { Component } from 'react'
import './style/index.less'
import { Button,Space,ConfigProvider } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* 修改主题颜色，修改局部主题颜色https://ant.design/docs/react/customize-theme-cn */}
        <ConfigProvider
               theme={{
                token: {
                  colorPrimary: '#00b96b',
                },
              }}>
          <Space>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </Space>
        </ConfigProvider>
      </div>
    )
  }
}

export default App
