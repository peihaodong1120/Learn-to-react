import React, {Component} from "react";
import {Button} from 'antd'

export default class Demo extends Component {
    state = {
        count: 0
    }

    handleCountAdd = () =>{
        // 1 对象式
        // this.setState({count:this.state.count + 1}, ()=>{
        //     // render执行后执行该函数，recat数据更新是异步的，这里可以拿到最新的数据
        //     console.log('对象式回调函数', this.state.count);
        // })

        // 2 函数式
        this.setState( 
            (state, props) =>{
                console.log('函数式更新状态',state, props);
                return {count: state.count + props.a}
            },
            ()=>{
                // render执行后执行该函数，recat数据更新是异步的，这里可以拿到最新的数据
                console.log('函数式回调函数', this.state.count);
            }
        )
        console.log('同步打印', this.state.count);

    }
    
    render() {
        return (
            <div>
                <p>总和{this.state.count}</p>
                <Button onClick={this.handleCountAdd}>点击➕1</Button>
            </div>
        )
    }
}