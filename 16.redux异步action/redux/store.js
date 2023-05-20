// 引入redux 核心库（createStore官方已经弃用） 最新的redux为 @reduxjs/toolkit
import {legacy_createStore, applyMiddleware} from 'redux'
// 引入reducer
import countReducer from './count_reducer'

// 引入redux-thunk实现异步action
import thunk from 'redux-thunk'

// 创建store
const store = legacy_createStore(countReducer, applyMiddleware(thunk)) 


// 暴露store
export default store