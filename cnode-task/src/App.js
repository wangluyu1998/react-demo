import React, { Component } from 'react';
import Header from './components/Header';
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login/Login';
import Detail from './container/Home/childcomps/Detail';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>  
                        <div className='content'>
                            <Route path='/' exact component={Home}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/about' component={About}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/topic/:id' component={Detail}/> 
                        </div>
                        <div className='sider'>
                            <div className='loginn'>
                                <p style={{fontSize:'12px'}}>CNode：Node.js专业中文社区</p>
                                <p style={{fontSize:'11px'}}>您可以登录或者注册，也可以</p>
                                <button className='btn'>通过GitHub登录</button>
                            </div>
                            <div className='imgs'>
                                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt='cnode'/>
                                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt='cnode'/>
                                <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt='cnode'/>
                            </div>
                            <div className='street'>
                                <p style={{padding:'6px 10px'}}>友情社区</p>
                                <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="cnode"/>
                                <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt="cnode"/>
                                <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt="cnode"/>
                                <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt="cnode"/>
                            </div>
                            <div className="erweima">
                                <p>客户端二维码</p>
                                <img src='https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU' alt="二维码"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}