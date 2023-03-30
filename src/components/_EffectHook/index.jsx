import React, {useState, useEffect} from "react"; // 
import {Button} from 'antd'
// 函数式组件
const Demo = function() {
    const [count, setCount] = useState(0); 
    // Effect Hook 可以让你在函数组件中执行副作用操作
    // Effect Hook 可以看作componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个生命周期钩子
    useEffect(()=>{
        // 可以做任何副作用操作
        let timer = setInterval(()=>{
            setCount(count=> count+ 1)
        }, 10000)
        return () =>{
            // 返回一个函数，这个函数在组件卸载前执行
            clearInterval(timer)
        }
    },[]) // 如果制定空数组，useEffect的回调函数只在第一次render执行后执行，如果指定state状态，指定哪个状态，状态改变就会执行回调
    const handleCountAdd = () =>{
        setCount((count)=>{
            return count + 1
        })
    }
    const handleChange = () =>{
    }

    return (
        <div>
            <h1>总数{count}</h1> 
            <Button onClick={handleCountAdd}>点击➕1</Button>
            <Button onClick={handleChange}>卸载组件</Button>
        </div>
    )
}

export default Demo