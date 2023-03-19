import React, { Component } from 'react'
import './index.css'
import {Checkbox} from 'antd'
export default class index extends Component {

  onChange = (value) =>{
    console.log(value);
  }
  
  render() {
    const { doName } = this.props 
    return (
      <div className='list_item'> 
       <Checkbox checked={doName.done} onChange={e =>this.onChange(doName)}>{doName.name}</Checkbox> 
      </div>
    )
  }
}
