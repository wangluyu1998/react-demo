import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Maincontent from './childcomps/Maincontent';

export default class Home extends Component {
    render() {
        let url = this.props.match.url;
        return (
            <div>
                <div className='headtab'>
                    <Link to='/?tab=all&page=1'><button className='it'>全部</button></Link>
                    <Link to='/?tab=good'><button className='it'>精华</button></Link>
                    <Link to='/?tab=ask'><button className='it'>问答</button></Link>
                    <Link to='/?tab=share'><button className='it'>分享</button></Link>
                    <Link to='/?tab=job'><button className='it'>招聘</button></Link>
                    {/* {url} */}
                </div>
                <div>
                    <Route path={`${url}`} component={Maincontent}/>
                </div>
            </div>
        )
    }
}
