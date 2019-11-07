import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Maincontent extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            pagenum:[1,2,3,4,5,6,7,8,9,10]
        }
    }
    componentDidMount(){
        let page = this.props.location.search;
        // console.log(page);
        fetch('https://cnodejs.org/api/v1/topics'+page)
        .then((res)=>
            res.json()
        )
        .then((res)=>{
            // console.log(res.data);
            this.setState({
                data:res.data
            });
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.location.search !== this.props.location.search){
            let nowpage = this.props.location.search;
            fetch('https://cnodejs.org/api/v1/topics'+nowpage)
            .then((res)=>
                res.json()
            )
            .then((res)=>{
                this.setState({
                    data:res.data
                });
            })
        }
    }
    render() {
        //str=str.split('');
        //分隔成字符串数组，获取第一项即?tab=all
        let url = this.props.match.url;
        let str = this.props.location.search;
        let search = str.split('&')[0];
        // console.log(search);
        return (
            <div>
                <ul className='content-item'>
                    {
                        this.state.data.map((item,idx)=>(
                            <li key={idx} className='item'>
                                <img src={item.author.avatar_url} alt={item.author.loginname} className='item-img'/>
                                <span style={{fontSize:'15px'}}>{item.reply_count}</span>/
                                <span style={{fontSize:'10px',color:'gray',paddingRight:'10px'}}>{item.visit_count}</span>
                                <Link to={'/topic/'+item.id} className="title">{item.title}</Link>
                                <span className='behind-part'>
                                <img src={item.author.avatar_url} alt={item.author.loginname} className='behind-img'/>1天前
                                </span>
                            </li>
                        ))
                    }
                </ul>
                <ul className='page-item'>
                    {
                        this.state.pagenum.map((item,index)=>(
                            <Link to={`${url}${search}&page=${item}`}>
                                <li key={index} className='page-num'>{item}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
