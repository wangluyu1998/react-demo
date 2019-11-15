import React, { Component } from 'react';
import AppTab from './container/AppTab';
import 'antd-mobile/dist/antd-mobile.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <AppTab/>
            </div>
        )
    }
}
