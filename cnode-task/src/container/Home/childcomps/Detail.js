import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            data:[]
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
                data:res.data.content
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
                    data:res.data.content
                });
            })
        }
    }
    render() {
        return (
            <div>
                {
                    <div style={{overflow:'hidden',backgroundColor:'white',padding:'20px'}}dangerouslySetInnerHTML={{__html:this.state.data}}></div>
                }
            </div>
        )
    }
}