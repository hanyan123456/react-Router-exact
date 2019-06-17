import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class ActivityNav extends Component {
    render() {
        return (
            <div>
                <NavLink to='/activity/detail' >详情</NavLink>
                <NavLink to='/activity/order' >订单</NavLink>
            </div>
        )
    }
}
export default ActivityNav