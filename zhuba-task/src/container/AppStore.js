import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Carousel,SearchBar } from 'antd-mobile';

export default class AppStore extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
        list1 : [
          {key:'1',title:'桌'},
          {key:'2',title:'床'},
          {key:'3',title:'椅'},
          {key:'4',title:'几'},
          {key:'5',title:'柜'},
          {key:'6',title:'书架'},
          {key:'7',title:'沙发'},
          {key:'8',title:'家居饰品'},
          {key:'9',title:'户外家具'},
          {key:'a',title:'全部分类'}
        ],
        list2 : [
          {key:'1',title:'Top Art Studio 欧式风格精细...',price:'￥ 39.95'},
          {key:'2',title:'顺顺工艺欧式风格塑料外框黑...',price:'￥ 83.99'}
        ]
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
            <div style={{position:'relative'}}>
                {/* 导航栏 */}
                <NavBar style={{backgroundColor:'#3fcccb'}}
                rightContent={[<img src="./images/gouwuche.png" style={{ marginRight: '22px',width:'21px',height:'21px'}} />]}>
                商城</NavBar>
                {/* 搜索栏 */}
                <div style={{backgroundColor:'rgba(204,204,204,0.2)',position:'absolute',top:'45px',height:'45px',width:'100%',zIndex:999}}>
                    <div style={{width:'10%',textAlign:'center',backgroundColor:'rgba(0,0,0,0.2)',height:'100%',float:'left',paddingTop:'15px'}}><img style={{height:'50%'}} src='images/search.jpg'/></div>
                    <SearchBar style={{width:'90%',backgroundColor:'rgba(0,0,0,0.2)',float:'left'}} placeholder="输入关键字搜索"/>
                </div>
                {/* 轮播图 */}
                <Carousel autoplay={true} infinite>
                {this.state.data.map((val,idx) => (
                  <a key={idx} style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
                    <img src={'./images/store_bg.jpg'} alt="" style={{ width: '100%', verticalAlign: 'top' }}/>
                  </a>
                ))}
                </Carousel>
                <div className="list2">
                  {this.state.list1.map((val,idx)=>(
                    <li key={idx}>
                      <img src={`./images/store0${val.key}.jpg`} alt=''/>
                      <p style={{fontSize:'13px',textAlign:'center'}}>{val.title}</p>
                    </li>
                  ))}
                </div>
                <div style={{height:'165px'}}>
                  {
                    this.state.list2.map((val)=>(
                      <div key={val.key} className='list3'>
                        <img src={`./images/store1${val.key}.jpg`} alt=''/>
                        <p style={{fontSize:'13px',color:'gray'}}>{val.title}</p>
                        <p style={{fontSize:'13px'}}>{val.price}</p>
                      </div>
                    ))
                  }
                </div>
                <div style={{height:'220px'}}>
                  <img style={{width:'94%',height:'180px',margin:'5px 2.5% 0 2.5%'}} src='./images/store-bottom.jpg' alt=''/>
                  <p style={{fontSize:'13px',color:'gray',marginLeft:'10px'}}>欧式风格精致软椅家庭办公室多用...</p>
                  <p style={{fontSize:'13px',marginLeft:'10px'}}>￥ 999</p>
                </div>
            </div>
        )
    }
}