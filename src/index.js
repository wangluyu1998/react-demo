//引入库、组件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowTime from './ShowTime';
import Todolist from './Todolist/Todolist';
import Request from './Request';

//组件交互
//父组件--->子组件：在子组件上添加属性
//在子组件中通过props获取数据

// ReactDOM.render(<ShowTime word="react"/>,document.getElementById('root'));
// ReactDOM.render(<Todolist/>,document.getElementById('root'));
ReactDOM.render(<Request/>,document.getElementById('root'));


// var e = <div>hello</div>;
// ReactDOM.render(e,document.getElementById('root'));


// function tick(){
//     var e = <div>{new Date().toLocaleString()}</div>
//     ReactDOM.render(e,document.getElementById('root'));
// }
// tick();

//用函数定义的组件(无生命周期函数)
//当只是渲染结构时
function ToDo(props){
    return (
        <div>
            {/* 条件渲染 */}
            {props.list.length >=5 ? <h1>toDo</h1> : ''}
            {/* {props.list.length >=6 && <h1>toDo</h1>} */}
            <ul>
                {/* 循环渲染 */}
                {
                    props.list.map((item,index) => index%2 == 0 && <li key={item}>{item}</li>)
                }
            </ul>
        </div>
    )
}
var item = [1,2,3,4,5];
// ReactDOM.render(<ToDo list={item}/>,document.getElementById('root'));



/**jsx表达式会被react转换成一个对象*/
var ele = React.createElement(
    'div',
    {"id":"box"},
    'hello',
    React.createElement(
        'h1',
        {'id':'h'},
        'react',
    )
);

var obj = {
    type:'div',
    props:{
        id:'box',
        class:'box',
        children:['hello',{
            type:'h1',
            props:{
                id:'h',
                class:'h',
                children:['react']
            }
        }]
    }
}

//加载html文件、浏览器解析html生成DOM树    <======>  对应页面回流
//link加载css文件、解析css规则、和DOM树结合生成render树，浏览器渲染引擎渲染render树   <======>  对应页面重绘
//页面回流一定会引起页面重绘
//页面回流（页面重排）：内容改变、大小改变、结构改变
//页面重绘：改变字体颜色、背景颜色等样式


/*
 * 用以下这种方法会使浏览器（页面）执行1000次回流
   for(var i = 0;i<1000;i++){
      document.body.innerHTML += '<li>'+i+'</li>';
   }
*/

/**
 * 以下是正确的方法：
   var str ='';
   for(var i=0;i<1000;i++){
       str += '<li>'+i+'</li>';
   }
   document.body.innerHTML = str;//仅在此回流一次
*/


/* 
 * 同样的，
   display、width、height、font-size等样式的改变也会引起页面回流
   document.body.style.width = '100px';//回流1次
   document.body.style.height = '100px';//回流1次
*/

/**
 * 以下是正确的方法，声明一个css的类：
    .change{
        width:100px;
        height:100px;
    }
 * document.body.className = 'change';
 */


/*
 * 同样的，
   页面中的node.offsetLeft、node.offsetWidth等慎用 
    var root = document.getElementById('root');
    setInterval(function(){
        root.style.width = root.offsetWidth + 1 +'px';
    },100);
*/

/*
 * 以下是正确的方法：对节点的操作先用变量代替
    var root = document.getElementById('root');
    var width = root.offsetWidth;
    setInterval(function(){
        width += 1;
        root.style.width = width +'px';
    },100);
*/

//自己声明的render函数，实现页面渲染
function render(obj,container){
    var ele = document.createElement(obj.type);
    /*
    不灵活，只能死板的改
    ele.id = obj.props.id;
    ele.innerHTML = obj.props.children[0];
    */

    //文档碎片(对应操作的是一个内存空间)
    var fragment = document.createDocumentFragment();

    var {type,props} = obj;
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item];
        }else if(item === 'children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i]==='object'){
                    render(props[item][i],ele);
                }
                else{
                    var txt = document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }

    fragment.appendChild(ele);
    container.appendChild(fragment);
}

// render(obj,document.getElementById('root'));

// ReactDOM.render(ele, document.getElementById('root'));