import React,  {Component} from "react";
// import qs from 'qs'; 
const data =[
    { id: '1', content:'努力'},
    { id: '2', content:'上进'},
    { id: '3', content:'挣钱'},
    { id: '4', content:'减肥'},
]


export default class Details extends Component {


    render() {
        // 1、params传惨组件接收参数
        // 在this.props.match.params中可以拿到路由传递过来的参数
        // const {id, title} = this.props.match.params

        // 2、search传惨组件接收参数
        // search 传参在 在this.props.location.search中可以拿到，拿到的是字符串urlencode类型，需要用qs转换成对象类型
        // const str = this.props.location.search // str拿到的字符串是?id=xx&title=xx str.slice(1)去除?
        // const res = qs.parse(str.slice(1))
        // const {id, title} = res

        // 3、query传参，组件内接收
        // 组件接收在this.props.location.query中拿到传递的参数
        // const {id = 1 ,title = 2} = this.props.location.query


        // 4、state传参，组件内接收
        // 组件接收在this.props.location.state中拿到传递的参数
        console.log(this.props);
        const {id = 1 ,title = 2} = this.props.location.state
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