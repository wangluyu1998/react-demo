import React, { Component } from 'react'

export default class Todoitems extends Component {
    render() {
        return (
            <div className="details">
                <h2>正在进行<span>{this.props.todocount}</span></h2>
                <ul className="list">
                    {
                        this.props.todo.map((item,idx)=>{
                            if(!item.isChecked){
                                return (
                                    <li key={idx}><input type="checkbox" checked={item.isChecked} onChange={()=>this.props.changeTodo(idx)} />{item.title}
                                        <button onClick={()=>{this.props.delTodo(idx)}}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <h2>已经完成<span>{this.props.donecount}</span></h2>
                <ul className="list">
                    {
                        this.props.todo.map((item,idx)=>{
                            if(item.isChecked){
                                return (
                                    <li key={idx}><input type="checkbox" checked={item.isChecked} onChange={()=>this.props.changeTodo(idx)}/>{item.title}
                                        <button onClick={()=>{this.props.delTodo(idx)}}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}