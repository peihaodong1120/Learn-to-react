import React, { Component } from 'react'
import './index.css'
import Search from '../../component/Search/index'
import List from '../../component/List/index'
import { Button } from 'antd';
export default class ToDoList extends Component {

  state = {
    ListData: [
      { id:1, name:'吃早饭', done:false},
      { id:2, name:'吃午饭', done:false},
      { id:3, name:'吃晚饭', done:false},
    ],  
    didListData:[
    
    ]
  }

  getSearchValue = (todoObj) => {
    let {ListData} = this.state
    const index = ListData.findIndex((item) =>{
      return item.id === todoObj.id
    })
    if (index === -1) {
      ListData.unshift(todoObj)
    }
    this.setState({ListData})
  }

  // 按钮操作
  handleOperate = (e) =>{
    console.log('handleOperate', e);
  }


  render() {
    const {ListData, didListData} = this.state
    return (
      <div className='main'>
        {/* 组件传值 */}
        <Search handleKeyDown={this.getSearchValue} />
        <div className='btn'>
        <Button onClick={() =>{this.handleOperate('delete')}} type="primary">删除</Button>
        <Button onClick={() =>{this.handleOperate('back')}} type="primary">恢复</Button>
        </div>
        <div className='to_do'>
          <List ListData={ListData} />
        </div>
        {
          didListData.length > 0?
          <div className='did'>
            <List  ListData={didListData}/>
          </div> : ''
        }
      </div>
    )
  }
}
