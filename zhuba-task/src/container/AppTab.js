import React from 'react'
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppIdea from './AppIdea';
import AppStore from './AppStore';
import AppMy from './AppMy';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  render() {
    return (
        <div style={{ 
            position: 'fixed', 
            height: '100%', 
            width: '100%', 
            top: 0 
        }}>
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#3fcccb"
            barTintColor="white"
            >
            <TabBar.Item
                title="首页"
                key="Life"
                icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/shouye.png) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/shouye1.png) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                }}
            >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/linggan.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/linggan1.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="灵感"
            key="idea"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            <AppIdea/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/shangcheng.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/shangcheng1.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="商城"
            key="store"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <AppStore/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: './images/wode.png' }}
            selectedIcon={{ uri: './images/wode1.png' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <AppMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}