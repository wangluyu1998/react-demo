import React,{Component} from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';


export default class Todolist extends Component{
    constructor(){
        super();
        this.state={
            todo:[1,2,3]
        }
    }
    addItem = (msg)=>{
        // this.state.todo.push(msg);
        // console.log(this.state.todo);
        this.setState({
            todo:[...this.state.todo,msg]
        })
        // console.log(msg);
    }
    delitem = (a)=>{
        // this.state.todo.splice(a,1);
        //深拷贝\浅拷贝
        //状态（state）：
        // 1.不要直接改变、处理状态
        var todo =[...this.state.todo];
        todo.splice(a,1);

        //2.setState是异步的

        this.setState({
            todo
        })
        console.log(a);
    }

    render(){
        return(
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delitem} todo={this.state.todo}/>
            </div>
        )
    }
}



//浅拷贝
var arr = [1,2,{a:100}];
var brr = [...arr];
brr.a = 200;
console.log(arr);

//深拷贝
var b = JSON.parse(JSON.stringify(arr));
b[2].a = 200;
console.log(arr);


//对象的拷贝
var a = {a:100};
var b = {b:200};
var o = Object.assign(a,b);
console.log(o===a);

var a = {a:100};
var o = Object.assign({},a);
console.log(o===a);
console.log(o);


//Object.keys返回由所有属性名组成的一个数组
Object.keys(a).forEach((item)=>{
    console.log(item);
    console.log(a[item]);
})

//尽量不用for var in
//原型上的东西也会被遍历出来
for(var item in a){
    console.log(a);
}