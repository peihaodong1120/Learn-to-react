import React, {Component,Fragment,useState} from "react"; // 引入createContext
import './index.css'


export default class Demo extends Component {
    state = {
        name:'张三',
        age:20
    }
    render() {
        const {name,age } = this.state
        return (
            <Fragment>
                <div className="ancestor">
                    <h3>祖先组件</h3>
                    <h4>我的名字叫：{name}</h4>
                    {/* 1、 CC组件作为BB组件的标签内容， */}
                    {/* <BB>
                        <CC age={age}></CC>
                    </BB> */}


                    {/* 2、 BB组件声明一个标签属性render 并且返回一个函数，而且这个函数的返回值是一个组件 */}
                     <BB render={(name)=> <CC age={age} name={name}/>} />
                </div>
            </Fragment>
        )
    }
}

// 类式组件
class BB extends Component {
    state ={
        hasError:false
    }
    // 捕获错误
    static getDerivedStateFromError(error) {
        console.log('@@2',error);
        return {
            hasError: true
        }
    }
    // 统计错误次数，通知服务端
    componentDidCatch(error, info){
        console.log('渲染组件出错xxxx', error, info);
    }
    render() {
        // 1、 在BB组件的this.props.children可以获取到CC组件
        // const {children} = this.props
        console.log(this.state.hasError);
        return (
            <Fragment>
                <div className="progeny1">
                    <h3>BB组件</h3>
                    <h4>我的名字叫：BB, 年龄：BB</h4>
                    {/* 1、 渲染到BB组件内 */}
                    {/* {children} */}

                    {/* 2、renderProps渲染 这相当于Vue的插槽 */} 
                    {/* 错误边界，判断是否出错渲染备用组件 */}
                    {this.state.hasError? <h4>xxxxx</h4> :this.props.render("章三")} {}
                </div>
            </Fragment>
        )
    }
}
// 函数式组件
function CC(props) {
    const [data] = useState({list:""})
    return (
        <Fragment>
            <div className="progeny2">
                <h3>孙子组件</h3>                
                <h4>我的名字叫：CC, 年龄：CC</h4>
                <h5>{data.list.xxx.xxx}</h5>
            </div>
        </Fragment>
    )
}
