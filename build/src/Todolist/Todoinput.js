import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state={
            n1:''
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            let todoitem={
                title:e.target.value,
                isChecked:false
            }
            this.props.addTodo(todoitem);
            this.setState({
                n1:''
            })
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return(
            <div className="headerwrap">
                <div className="header">
                    <label htmlFor="inp" style={{fontSize:'20px'}}>ToDoList</label>
                    <input id="inp" name="n1" onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown={this.handleInput} type="text" placeholder='添加ToDo'/>
                </div>
            </div>
        )
    }
}
