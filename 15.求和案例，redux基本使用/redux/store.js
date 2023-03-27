// 引入redux 核心库（createStore官方已经弃用） 最新的redux为 @reduxjs/toolkit
import {legacy_createStore} from 'redux'
import countReducer from './count_reducer'

// 创建store
const store = legacy_createStore(countReducer) 

// 暴露store
export default store