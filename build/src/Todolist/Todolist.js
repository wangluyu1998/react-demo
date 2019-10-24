import React, { Component } from 'react'
import Todoitems from './Todoitems'
import Todoinput from './Todoinput'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[
                {
                    title:"react.js",
                    isChecked:false
                },
                {
                    title:"node.js",
                    isChecked:false
                }
            ],
            todocount:0,
            donecount:0
        }
    }
    componentDidMount(){
        let data = this.getStorage("todolist");
        if(data){
            this.setState({
                todo:data
            },()=>{
                this.changeCount();
            })
        }
    }
    componentWillMount(){
        this.changeCount();
    }
    setStorage = (key,value)=>{
        localStorage.setItem(key,JSON.stringify(value));
    }
    getStorage = (key)=>{
        return JSON.parse(localStorage.getItem(key));
    }
    addItem = (itm)=>{
        this.setState({
            todo:[...this.state.todo,itm]
        },()=>{
            this.changeCount();
            this.setStorage("todolist",[...this.state.todo]);
        });
    }
    delitem = (idx)=>{
        var todo =[...this.state.todo];
        todo.splice(idx,1);
        this.setState({
            todo
        },()=>{
            this.changeCount();
            this.setStorage("todolist",[...this.state.todo]);
        });
    }
    changeStatus = (idx)=>{
        var todo =[...this.state.todo];
        todo[idx].isChecked = !todo[idx].isChecked;
        this.setState({
            todo
        },()=>{
            this.changeCount();
            this.setStorage("todolist",[...this.state.todo]);
        });
    }
    changeCount = ()=>{
        var todocount=0;
        var donecount=0;
        let todo = this.state.todo;
        for(var i=0;i<todo.length;i++){
            if(!todo[i].isChecked){
                todocount++;
            }else{
                donecount++;
            }
        };
        this.setState({
            todocount:todocount,
            donecount:donecount
        })
    } 
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoitems delTodo={this.delitem} changeTodo={this.changeStatus} todo={this.state.todo} todocount={this.state.todocount} donecount={this.state.donecount}/>
            </div>
        )
    }
}
