import React, { Component } from 'react'
import { NavBar, Icon, Flex } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';

export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1', '2'],
          });
        }, 100);
      }
    render() {
        return (
            <div>
                {/* 导航栏 */}
                <NavBar style={{backgroundColor:'#3fcccb'}}>住吧家居</NavBar>
                {/* 轮播 */}
                <WingBlank style={{margin:'0'}}>
                <Carousel autoplay={true} infinite>
                {this.state.data.map(val => (
                    <a key={val} style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
                        <img src={`./images/life0${val}.jpg`} alt="" style={{ width: '100%', verticalAlign: 'top' }}/>
                    </a>
                ))}
                </Carousel>
                </WingBlank>
                <div className='list1'>
                <Flex wrap="wrap">
                  {
                   [1,2,3].map((val)=>(
                    <div key={val} className='imgwrap'><img src={`./images/list0${val}.jpg`} alt=""/></div>
                   )) 
                  }
                </Flex>
                </div>
                <div style={{float:'left',height:'220px',width:'100%'}}>
                  <div style={{float:'left',height:'42px'}}>
                  <img src="./images/li.jpg" className="bottom-img1" alt=""/><span style={{fontSize:'18px',lineHeight:'42px'}}>热门推荐</span>
                  </div>
                  {
                    [1,2].map((val)=>(
                      <div key={val} className='bottom1'>
                        <img src={`./images/bottom${val}.jpg`} className="bottom-img2" alt=""/><p>什么是英伦装修风格呢 英伦风格装修效果图</p>
                      </div>
                    ))
                  }
                </div>
            </div>
        )
    }
}