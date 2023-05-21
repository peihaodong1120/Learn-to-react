// 引入Ui组件
import Count from '../../components/Count/index'
// 引入创建action对象方法
import {addCount, subtractionCount, addCountSync} from '../../redux/create_action'

// 引入容器组件， 使用react-redux
import { connect } from 'react-redux'



// const mapStateToProps = (state) =>{
//    return {
//     count: state
//    }
// }

// const mapDispacthToProps = (dispatch) =>{
//     return {
//      handleAdd: (data) =>{
//         dispatch(addCount(data))
//      },
//      handleSubtiaction:(data) =>{
//         dispatch(subtractionCount(data))
//      },
//      handleAddAsync:(data) =>{
//         dispatch(addCountSync(data))
//      }
//     }
//  }

/** 
 * react-redux容器组件优化
 *  可以使用下面的简写方式
 * */ 
// 将容器组件与Ui组件进行连接，并且暴露容器组件
export default connect(
   state => ({count: state}),
   {
    handleAdd: addCount,
    handleSubtiaction: subtractionCount,
    handleAddAsync: addCountSync
   }
)(Count)