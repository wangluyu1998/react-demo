import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            udetail:[]
        }
    }
    componentDidMount(){
        let url = this.props.match.url;
        // console.log(url);
        fetch('https://cnodejs.org/api/v1'+url)
        .then((res)=>
            res.json()
        )
        .then((res)=>{
            // console.log(res.data);
            this.setState({
                data:res.data,
                udetail:res.data.author
            });
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.location.search !== this.props.location.search){
            let nowurl = this.props.match.url;
            fetch('https://cnodejs.org/api/v1'+nowurl)
            .then((res)=>
                res.json()
            )
            .then((res)=>{
                this.setState({
                    data:res.data,
                    udetail:res.data.author
                });
            })
        }
    }
    render() {
        // let author = this.state.data.author; 
        // console.log(author.loginname);
        let loginname = this.state.udetail.loginname;
        return (
            <div>
                {<h2 style={{backgroundColor:'white',padding:'10px 20px',margin:0}} dangerouslySetInnerHTML={{__html:this.state.data.title}}></h2>}
                {<p style={{backgroundColor:'white',fontSize:'11px',color:'gray',padding:'0 20px 10px 20px',margin:0}} dangerouslySetInnerHTML={{__html:`· 发布于1天前 · 作者${loginname} · ${this.state.data.visit_count}次浏览`}}></p>}
                {<hr/>}
                {<div style={{overflow:'hidden',backgroundColor:'white',padding:'10px 20px',margin:0}} dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>}
            </div>
        )
    }
}