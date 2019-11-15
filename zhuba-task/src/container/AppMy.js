import React, { Component } from 'react'
import { NavBar, Icon, Flex } from 'antd-mobile';

export default class AppMy extends Component {
    render() {
        return (
            <div>
                {/* 导航栏 */}
                <NavBar style={{backgroundColor:'#3fcccb'}}>我的</NavBar>
            </div>
        )
    }
}
