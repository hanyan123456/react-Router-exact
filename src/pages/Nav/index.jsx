import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
class Nav extends Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <NavLink to='/' exact>主页</NavLink>
                    <NavLink to='/activity' exact>动态</NavLink>
                    <NavLink to='/login' exact>登录</NavLink>
                </div>
            </div>
               
        )
    }
}
export default Nav