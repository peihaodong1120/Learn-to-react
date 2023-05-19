import {ADD, SUBSCRIBE}from './constant'

//  初始化数据
/*
    1、该文件上用于创建一个为count服务的reducer函数 
    2、reducer函数会有两个参数，分别是 参数1:preState 之前的状态，参数2 action 动作对象
*/
const initData = 0

const countReducer = function(pre = initData, action) {
    const {type, data} = action
    console.log(pre,action);
    switch (type) {
        case ADD:
            return pre + data
        case SUBSCRIBE:
            return pre - data
        default: 
            return pre
    }
}

export default countReducer