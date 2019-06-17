import React, {Component} from 'react'
import ActivityNav from './component/ActivityNav/ActivityNav'
import Detail from './component/detail'
import Order from './component/order'
import {  Route, Switch } from 'react-router-dom';
class Activity extends Component{
    render(){
        return(
            <div>
                <ActivityNav></ActivityNav>
                <Switch>
                    <Route path='/activity' Component={Detail}> 详情</Route>
                    <Route path='/activity/detail' Component={Detail}> 详情</Route>
                    <Route path='/activity/order' Component={Order}> 订单</Route>
                </Switch>
            </div>
        )
    }
}
export default Activity