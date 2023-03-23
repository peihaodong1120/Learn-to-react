import React, { Component } from 'react'
import {Route, Switch ,Redirect} from 'react-router-dom'
import MyNavLink from '../../component/MyNavLink'
import News from './News'
import Message from './Message'
import './index.css'
// export default class Home extends Component {
//   state ={
//     id:1
//   }


//   handleCkick = (val)=>{
//     this.setState({id:val})
//   }

//   render() {
//     const {id} = this.state
//     return (
//       <div className='main_box'>
//         <h1>俺是home页面</h1>
//         <div className='menu_btn'> 
//           <div className={`item ${id === 1? 'isActive' : ''}`} onClick={()=>this.handleCkick(1)}>
//             页面1
//           </div>
//           <div className={`item ${id === 2? 'isActive' : ''}`} onClick={()=>this.handleCkick(2)}>
//             页面2
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
export default class Home extends Component {


  render() {
    return (
      <div className='main_box'>
        <h1>俺是home页面</h1>
        <div className='menu_btn'> 
          <MyNavLink to='/home/news' >NEWS</MyNavLink>
          <MyNavLink to='/home/message' >MESSAGE</MyNavLink>
        </div>
        <div>
        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>\
          <Redirect to='/home/news'></Redirect>
        </Switch>
        </div>
      </div>
    )
  }
}
