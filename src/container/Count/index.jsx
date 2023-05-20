// 引入Ui组件
import Count from '../../components/Count/index'
// 引入创建action对象方法
import {addCount, subtractionCount, addCountSync} from '../../redux/create_action'

// 引入容器组件， 使用react-redux
import { connect } from 'react-redux'


/**
 *  1. mapStateToProps函数返回一个对象
 *  2. 返回的对象中的key作为UI组件的props的key， 返回对象的Value就作为传递给Ui组件Props的Value
 *  3. mapStateToProps用于传递状态
 */
const mapStateToProps = (state) =>{
   return {
    count: state
   }
}

/**
 *  1. mapDispacthToProps函数返回一个对象
 *  2. 返回的对象中的key作为UI组件的props的key， 返回对象的Value就作为传递给Ui组件Props的Value
 *  3. mapDispacthToProps用于传递操作状态的方法
 */
const mapDispacthToProps = (dispatch) =>{
    return {
     handleAdd: (data) =>{
        dispatch(addCount(data))
     },
     handleSubtiaction:(data) =>{
        dispatch(subtractionCount(data))
     },
     handleAddAsync:(data) =>{
        dispatch(addCountSync(data))
     }
    }
 }

// 将容器组件与Ui组件进行连接，并且暴露容器组件
export default connect(mapStateToProps,mapDispacthToProps)(Count)