import {ADD_PERSON} from '../constants'
const  initData = [
    {id:'001', name:'张三', age:20}
]

const personReducer = (pre = initData, action) =>{
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...pre]
        default: 
            return  pre
    }

}

export default personReducer