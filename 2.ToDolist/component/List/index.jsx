import React, { Component } from 'react'
import './index.css'
import ListItem from '../ListItem/index'
export default class index extends Component {

  getChoose =(value) => {
    console.log(value);
  }

  render() {
    const {ListData} = this.props
    return (
      <div className='list'>
        {
          ListData.map(item =>{
            return (
              <ListItem getChoose={this.getChoose} key={item.id} doName={item} />
            )
          })
        }
      </div>
    )
  }
}
