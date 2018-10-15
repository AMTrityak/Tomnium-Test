import React, { Component } from 'react';
import './main.css';
import {Link} from 'react-router-dom';


class Main extends Component {

    render() {
        return (
            <div className="main-wrapper">
                <div className='registr-wrapper'>
                <div className='sign-up'>
                    <Link to={'/registration'}>Sign Up</Link>
                </div>
                <div className='sign-in'>
                    <Link to={'/login'}>Sign in</Link>
                </div>
                </div>
                <div className='products'>
                    <Link to={'/products'}>All Products</Link>
                </div>
            </div>
        );
    }
}

export default Main;