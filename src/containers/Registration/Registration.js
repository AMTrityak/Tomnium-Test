import React, {Component} from 'react';
import './registration.css';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {postRegistration} from '../../redux/modules/registration';

const mapStateToProps = store => {
    return {
        token: store.registration.token,
        isAuth: store.registration.isAuth,
        err: store.registration.err,
    }
};


class Registration extends Component {

    state = {
        username: '',
        password: '',
    };

    handleInputChange = (key, e) => {
        this.setState({
            [key]: e.target.value
        })
    };

    handleClick = (e) => {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.props.postRegistration({username, password})
    };

    render() {
        return (
            <div className="login-wrapper">
                {!this.props.isAuth ?
                    <div className='input-wrapper'>
                        <form>
                            <h1>Registration</h1>
                            {this.props.err &&
                            <label>{this.props.err}</label>
                            }
                            <input
                                type="text"
                                onChange={(e)=>this.handleInputChange('username', e)}
                                placeholder='Username'/>
                            <input
                                type="password"
                                onChange={(e)=>this.handleInputChange('password', e)}
                                placeholder='Password'
                            />
                            <button type='submit' className='submit' onClick={this.handleClick}>Sign In</button>
                        </form>
                    </div>
                    : <Redirect
                        to={{
                            pathname: '/products',
                            state: {from: this.props.location},
                        }}
                    />}
            </div>
        );
    }
}

export default connect(mapStateToProps, {postRegistration})(Registration);