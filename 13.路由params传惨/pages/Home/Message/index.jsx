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

    render() {
        const {list} = this.state
        return(
            <div>
               <ul>
               {
                list.map(item =>{
                    return (
                        <li key={item.id}>
                            {/* react路由传惨，params传惨。 声明路由并且传递数据*/}
                            <Link to={`/home/message/details/${item.id}/${item.label}`}>{item.label}</Link>
                        </li>
                    )
                })
               }
               </ul>
               <div>
                {/* 注册路由组件，路径上接收声明的参数 */}
                <Route path='/home/message/details/:id/:title' component={Details}></Route>
               </div>
            </div>
        )
    }
}