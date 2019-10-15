/**
 * 父组件
 */

import React,{Component,Fragment} from 'react';

//用类定义组件
class ShowTime extends Component{
    //construtor只会执行一次
    constructor(){
        super();//将父类中的this对象继承给子类
        this.state = {
            time:new Date().toLocaleString()
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(() => {
            console.log(1);
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000);
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }

    componentDidUpdate(){
        console.log('didupdate');
    }

    //点击事件处理函数
    //内容较多时，在外面封装，并在标签处绑定
    //内容较少时，在标签绑定的事件上写一个箭头函数即可
    handleClick = (num,e)=>{
        console.log(num,e);
        console.log('点击成功');
    }

    divClick(num,e){
        console.log(num,e);
    }


    //每执行一次setState就会执行一次render
    render(){
        console.log('render');
        return(
            <Fragment>
                {/* 箭头函数是事件处理函数，handleClick并不是事件处理函数，它只是一个普通的函数 */}
                <div onClick={(ev)=>this.handleClick(2,ev)}>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,3)}>hello{this.props.word}</div>
            </Fragment>
        )
    }
}

//默认导出,只能导出一次，名儿随便起一般用组件名
export default ShowTime;
//另一种写法,在类定义组件的时候：export default class ShowTime extends Component{};

//命名导出,可以导出多个；
//export {ShowTime};
//export {x};
//export {xx};
//export {xxx};
//注意：index.js中引入的时候：import {ShowTime} from './ShowTime';