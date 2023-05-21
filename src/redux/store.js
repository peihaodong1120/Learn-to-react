// 引入redux 核心库（createStore官方已经弃用） 最新的redux为 @reduxjs/toolkit
import {legacy_createStore, applyMiddleware, combineReducers} from 'redux'
// 引入reducer
import countReducer from './reducer/count'
import presonReducer from './reducer/preson'


// 引入redux-thunk实现异步action
import thunk from 'redux-thunk'

// 整合所有的reducer， 类似vuex的模块化， 最后就可以实现全局状态管理
const allReducer = combineReducers({
    count: countReducer,
    person: presonReducer
})

// 创建store
const store = legacy_createStore(allReducer, applyMiddleware(thunk)) 


// 暴露store
export default store