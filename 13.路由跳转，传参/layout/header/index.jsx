import React, {Component} from "react";
import {withRouter} from 'react-router-dom'

class Header extends Component {

    handelUrlChange = (type) =>{
        switch (type) {
            case 'to':
                this.props.history.push('/home/message')
                break;
            case 'back':
                this.props.history.goBack(-1)
                break;
            case 'replace':
                this.props.history.replace('/home')
                break;
            default:
                break;
        }
    }

    render() {
         console.log('Header',this.props);
        return (
            <div>
                <h2>Reack-Router</h2>
                <div>
                    <button onClick={()=>{this.handelUrlChange('to')}}>前进</button>
                    <button onClick={()=>{this.handelUrlChange('back')}}>后退</button>
                    <button onClick={()=>{this.handelUrlChange('replace')}}>刷新替换</button>
                </div>
            </div>
        )
     }
}

// 使用widthRouter可以使一般组件变成路由组件，从而让一般组件可以进行路由跳转操作
export default withRouter(Header)