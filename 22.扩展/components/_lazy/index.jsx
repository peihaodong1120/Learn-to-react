import React, {Component,lazy,Suspense} from 'react'
import {Link, Route} from 'react-router-dom'
import Loading from './loading'

const Home = lazy(()=> import('./home'))
const Message = lazy(()=> import('./message'))

export default class Demo extends Component {


    render() {
        return(
            <div>
                <h1>header</h1>
                <div>
                    <Link to={'/home'}>home页面</Link>
                    <Link to={'/message'}>message页面</Link>
                </div>
                <div>
                <Suspense fallback={<Loading/>}>
                    <Route path={'/home'} component={Home}></Route>
                    <Route path={'/message'} component={Message}></Route>
                </Suspense>
                </div>
            </div>
        )
    }
}