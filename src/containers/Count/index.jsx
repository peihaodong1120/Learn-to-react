import React, {Component} from "react";
import { Select, Space, Button } from 'antd';

import {connect} from 'react-redux'
import {addCount, addCountSync, subtractionCount} from '../../redux/create_action'

// UI组件
class Count extends Component {
    state = {
        defaultValue: 1
    }

    handleChange = (val) =>{
        this.setState({defaultValue: val})
    }

    handleBtnClick(type) {
        const {defaultValue} = this.state
        switch (type) {
            case 'add':
                this.props.handleAdd(defaultValue*1)
                break;
            case 'jian':
                this.props.handleJian(defaultValue*1)
                break;
            case 'addAdd':
                if (this.proos.count % 2 !== 0) {
                    this.props.handleAdd(defaultValue*1)
                }
                break;
            case 'addAsync':
                this.props.handleAddAsync(defaultValue*1)
                break;
            default:
                break;
        }
    }
    
    render() {
        return (
            <div>
                <h1>当前求和状态为{this.props.count}</h1>
                <div>
                    <Space>
                        <Select
                            defaultValue={this.state.defaultValue}
                            options={[
                                { value: 1, label: 1},
                                { value: 2, label: 2},
                                { value: 3, label: 3},
                            ]}
                            onChange={this.handleChange}
                            />
                            <Button type="primary" onClick={() => this.handleBtnClick('add')}>加</Button>
                            <Button onClick={() => this.handleBtnClick('jian')}>减</Button>
                            <Button type="dashed" onClick={() => this.handleBtnClick('oddAdd')}>奇数加</Button>
                            <Button danger onClick={() => this.handleBtnClick('addAsync')}>异步加</Button>
                    </Space>
                </div>
            </div>
        )
    }
}

// 容器组件
export default connect(
    state => ({count: state}),
    {
        handleAdd:addCount,
        handleJian: subtractionCount,
        handleAddAsync:addCountSync
    }
)(Count)