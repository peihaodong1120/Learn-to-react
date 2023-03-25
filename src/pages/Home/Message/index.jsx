import React, {Component} from "react";
import {Link, Route} from 'react-router-dom'
import Details from "./details";

export default class Message extends Component {

    state = {
        list:[
            {
                label:'Message 1',
                id:'1'
            },
            {
                label:'Message 2',
                id:'2'
            },
            {
                label:'Message 3',
                id:'3'
            },
            {
                label:'Message 4',
                id:'4'
            },
        ]
    }

    handleClick = () =>{
        // params 编程式导航
        // this.props.history.push('/home/message/details/1/xxx')
        // search 编程式导航
        // this.props.history.push({pathname:'/home/message/details',search:'?id=1&title=2'})
        // query 和 state 编程式导航
        // this.props.history.push({pathname:'/home/message/details',query:{id:1, title:2}})
        this.props.history.push({pathname:'/home/message/details',state:{id:'1', title:2}})
    }

    render() {
        const {list} = this.state
        return(
            <div>
               <ul>
               {
                list.map(item =>{
                    return (
                        <li key={item.id} onClick={this.handleClick}>
                            {/* 声明式导航 */}
                            {/* 1、react路由传参，params传参。 声明路由并且传递数据*/}
                            {/* <Link to={`/home/message/details/${item.id}/${item.label}`}>{item.label}</Link> */}
                            {/* 2、react路由传参，search传参 */}
                            {/* <Link to={`/home/message/details?id=${item.id}&title=${item.label}`}>{item.label}</Link> */}
                            {/* 3、react路由传参，query传参 */}
                            {/* <Link to={{pathname:'/home/message/details',query:{id:item.id, title:item.label}}}>{item.label}</Link> */}
                            {/* 4、react路由传参，state传参  state和query传参其实是一样的，query明文，state加密 */} 
                            {/* <Link to={{pathname:'/home/message/details',state:{id:item.id, title:item.label}}}>{item.label}</Link> */}
                            <div >{item.label}</div>
                        </li>
                    )
                })
               }
               </ul>
               <div>
                {/* 1、react路由传参，params传参。注册路由组件，路径上接收声明的参数 */}
                <Route path='/home/message/details/:id/:title' component={Details}></Route>
                {/* 2、serarch传参在组册路由组件时无需做任何事情 */}
                {/* <Route path='/home/message/details' component={Details}></Route> */}
                {/* 3、query， state传参在组册路由组件时无需做任何事情 */}
                <Route path='/home/message/details' component={Details}></Route>
               </div>
            </div>
        )
    }
}