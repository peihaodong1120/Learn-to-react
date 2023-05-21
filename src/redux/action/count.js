import {ADD, SUBTRACT} from '../constants'
// 创建action对象

// 同步action 返回一个对象
export const addCount = (data) =>({type:ADD,data})
export const subtractionCount = (data) =>({type:SUBTRACT,data})
// 异步action 返回一个函数
export const addCountSync = (data) => {
    return function(dispatch) {
        setTimeout(() =>{
            dispatch(addCount(data))
        }, 1000)
    }
}