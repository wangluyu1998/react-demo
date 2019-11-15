import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Tabs, Badge } from 'antd-mobile';

const tabs = [
    { title: '推荐', key: 't1' },
    { title: '冬季', key: 't2' },
    { title: '宜家', key: 't3' },
    { title: '小户型', key: 't4' },
    { title: '个性色彩', key: 't5' }
  ];

export default class AppIdea extends Component {
    constructor(){
        super();
        this.state={
            data:['1','2','3','4','5','6']
        }
    }
    render() {
        return (
            <div>
                {/* 导航栏 */}
                <NavBar style={{backgroundColor:'#3fcccb'}}
                rightContent={[<Icon key="0" type="search" style={{ marginRight: '16px' }} />]}>
                灵感</NavBar>
                <div>
                    <Tabs tabs={tabs} initialPage={'t1'}>
                        <div style={{backgroundColor:'rgb(243, 237, 237)'}}>
                            {this.state.data.map(
                                val =>(
                                    <div key={val} className="idea"><img src={`./images/idea0${val}.jpg`} alt=""/></div>
                                ))}
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
