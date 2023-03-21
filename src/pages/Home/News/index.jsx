import React, {Component} from "react";

export default class News extends Component {

    state = {
        list:[
            {
                label:'news 1',
                id:'1'
            },
            {
                label:'news 2',
                id:'2'
            },
            {
                label:'news 3',
                id:'3'
            },
            {
                label:'news 4',
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