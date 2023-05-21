import React, {Component} from "react";
import {Input, Button, Space} from 'antd'
import {connect} from 'react-redux'
import {personAction} from '../../redux/action/preson'
class Person extends Component {

    state = {
        name:'',
        age: ''
    }
    handleChange =(e, type) => {
        switch (type) {
            case 'name':
                this.setState({name:e.target.value})
                break;
            case 'age':
                this.setState({age:e.target.value})
                break
            default:
                break;
        }
    }
    handelClick = () => {
        const item = {id:Date.now(), ...this.state} 
        this.props.addPerson(item)
        this.setState({name:'', age:''})
    }

    render() {
        const {count, person} = this.props.state
        return (
            <div>
                <h1>Person组件</h1>
                <div>
                <Space>
                    <Input value={this.state.name} onChange={(e)=>{this.handleChange(e, 'name')}}  placeholder="请输入名字" />
                    <Input value={this.state.age} onChange={(e)=>{this.handleChange(e, 'age')}} placeholder="请输入年龄" />
                    <Button onClick={this.handelClick}>增加</Button>
                </Space>
                </div>
                <div style={{marginTop:20+'px'}}>
                    <ul>
                       {
                        person.map(item =>{
                            return <li key={item.id}>姓名：{item.name}, 年龄：{item.age}</li>
                        })
                       }
                    </ul>
                    上方组件求和为：{count}
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({state}),
    {
        addPerson:personAction
    }
)(Person)