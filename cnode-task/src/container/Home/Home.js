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
                    <Link to='/?tab=all&page=1' className='it'>全部</Link>
                    <Link to='/?tab=good' className='it'>精华</Link>
                    <Link to='/?tab=ask' className='it'>问答</Link>
                    <Link to='/?tab=share' className='it'>分享</Link>
                    <Link to='/?tab=job' className='it'>招聘</Link>
                    {/* {url} */}
                </div>
                <div>
                    <Route path={`${url}`} component={Maincontent}/>
                </div>
            </div>
        )
    }
}
