import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div style={{width:'900px',height:'500px',backgroundColor:'#fff',padding:'20px 20px'}}>
                <h3>关于</h3>
                <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。
CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                <p>社区目前由 <span style={{color:'rgb(12, 183, 235)'}}>@alsotang</span> 在维护，有问题请联系：<sapn style={{color:'rgb(12, 183, 235)'}}>https://github.com/alsotang</sapn></p>
                <p>请关注我们的官方微博：<span style={{color:'rgb(12, 183, 235)'}}>http://weibo.com/cnodejs</span></p>
            </div>
        )
    }
}
