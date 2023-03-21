import React, {Component} from "react";

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
               {
                list.map(item =>{
                    return (
                        <div key={item.id}>{item.label}</div>
                    )
                })
               }
            </div>
        )
    }
}