import React, {Component} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {postLogin} from '../../redux/modules/login'


const mapStateToProps = store => {
    return {
        isAuth: store.login.isAuth,
    }
};

class Login extends Component {

    state = {
        username: '',
        password: '',
    };

    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };
    handleClick = (e) => {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.props.postLogin({username, password})
    };


    render() {
        return (
            <div className="login-wrapper">
                {!this.props.isAuth ?
                    <div className='input-wrapper'>
                        <form>
                            <div>
                                <h1>Login</h1>
                                <input
                                    type="text"
                                    onChange={this.handleChangeUsername}
                                    placeholder='Your name'
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    onChange={this.handleChangePassword}
                                    placeholder='Your password'
                                />
                            </div>
                            <button type='submit' className='submit' onClick={this.handleClick}>Sign In</button>
                            <Link to={'/product/new'}>New Product</Link>
                            <Link to={'/products'}>Products</Link>
                        </form>
                    </div> :
                    <Redirect
                        to={{
                            pathname: '/product/new',
                            state: {from: this.props.location},
                        }}
                    />
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, {postLogin})(Login);