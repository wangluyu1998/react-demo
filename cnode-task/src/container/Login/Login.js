import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='input-login'>
                    <div className="inputt">用户名<input type='text' name='name'/></div>
                    <div className="inputt2">密码<input type='text' name='password'/></div>
                    <Link to='/?tab=all'><button className='btn-login'>登录</button></Link>
                </div>
            </div>
        )
    }
}
