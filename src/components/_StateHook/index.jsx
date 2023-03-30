import React, {useState,Fragment} from "react"; // 
import {Button} from 'antd'

// 函数式组件
const Demo = function() {
    // useState(初始化值)  会返回两个元素的数组，第一元素是初始化的值，第二个元素是改变状态的函数
    const [count, setCount] = useState(0); 
    const [data,setData] = useState({   // 和vue3的reactive非常相似
        a:1,
        b:{
            name:'章三'
        }
    })
    const handleCountAdd = () =>{
        // setCount(count+1) // 写法1
        // 写法2，传入一个函数，函数参数是上一次的状态
        setCount((count)=>{
            return count + 1
        })
        console.log(data);
        setData({a:2})
    }

    return (
        <Fragment>
            <h1>总数{count}</h1>
            <Button onClick={handleCountAdd}>点击➕1</Button>
        </Fragment>
    )
}

export default Demo