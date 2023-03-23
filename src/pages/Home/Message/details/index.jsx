import React,  {Component} from "react";

const data =[
    { id: '1', content:'努力'},
    { id: '2', content:'上进'},
    { id: '3', content:'挣钱'},
    { id: '4', content:'减肥'},
]


export default class Details extends Component {


    render() {
        // 在this.props.match.params中可以拿到路由传递过来的参数
        console.log('Details', this.props);
        const {id, title} = this.props.match.params
        const content = data.find(value => value.id === id)
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{content.content}</li>
                </ul>
            </div>
        )
    }
}