import React, { Component } from 'react'

export default class Api extends Component {
    render() {
        return (
            <div style={{width:'900px',height:'500px',backgroundColor:'#fff',padding:'20px 20px'}}>
                <h3>Api</h3>
                <p>以下 api 路径均以 <span style={{color:'rgb(12, 183, 235)'}}>https://cnodejs.org/api/v1 为前缀</span></p>
                <p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>
            </div>
        )
    }
}
