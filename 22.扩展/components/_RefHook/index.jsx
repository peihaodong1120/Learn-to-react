import React, {useState, useRef} from "react"; // 引入useRef
import {Button, Input, message} from 'antd'
// 函数式组件
const Demo = function() {
    const [count, setCount] = useState(0); 
    const [messageApi, contextHolder] = message.useMessage()
    const myRef = useRef() // 使用

    const handleCountAdd = () =>{
        setCount((count)=>{
            return count + 1
        })
    }
    const handleChange = () =>{
        console.log(myRef);
        // 获取ref内容
        messageApi.info(myRef.current.input.value)
    }

    return (
        <div>
            {contextHolder}
            <h1>总数{count}</h1>
            <Input ref={myRef} placeholder="请输入内容"></Input> {/*使用ref*/}
            <Button onClick={handleCountAdd}>点击➕1</Button>
            <Button onClick={handleChange}>点击弹出input内容</Button>
        </div>
    )
}

export default Demo