import React, {Component,createContext, Fragment} from "react"; // 引入createContext
import './index.css'

const MyContext = createContext() // 创建一个context对象
const {Provider,Consumer} = MyContext // 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
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
                    {/* 使用Provider组件包裹消费组件，多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。 */}
                    <Provider value={{name, age}}>
                        <AA/>
                    </Provider>
                </div>
            </Fragment>
        )
    }
}

class AA extends Component {
    render() {
        return (
            <Fragment>
                <div className="child">
                    <h3>子组件</h3>
                    <h4>我的名字叫：{}</h4>
                    <BB />
                    <CC />
                </div>
            </Fragment>
        )
    }
}

// 类式组件
class BB extends Component {
    // 子孙组件静态属性contextType重新赋值，赋值创建的context对象
    static contextType = MyContext;
    render() {
        // 然后可以在this.context获取到祖先组件传递过来的数据
        console.log('组件BB',this.context);
        const {name, age} = this.context
        return (
            <Fragment>
                <div className="progeny1">
                    <h3>孙子组件</h3>
                    <h4>我的名字叫：{name}, 年龄：{age}</h4>
                </div>
            </Fragment>
        )
    }
}
// 函数式组件
function CC() {
    return (
        <Fragment>
            <div className="progeny2">
                <h3>孙子组件</h3>
                {/* 函数式组件，要使用context对象中的Consumer来接收传递的数据 */}
                <Consumer>
                    {value => {
                        console.log('组件CC', value)
                        return <h4>我的名字叫：{value.name},年龄：{value.age}</h4>
                    }}
                </Consumer>
                
            </div>
        </Fragment>
    )
}
