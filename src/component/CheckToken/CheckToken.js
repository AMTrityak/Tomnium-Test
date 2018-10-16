import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {postLoginTokenSuccess} from '../../redux/modules/login';


const mapStateToProps = store => {
    return {
        isAuth: store.login.isAuth,
    }
};

class CheckToken extends Component {
    componentWillMount() {
       if(localStorage.getItem('auth')){
           const data = localStorage.getItem('auth');
           this.props.postLoginTokenSuccess({data})
       }
    }
    render() {
        return (
            <div>
                {this.props.isAuth ?
                    <div>
                        {this.props.children}
                    </div>:
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: this.props.location},
                        }}
                    />
                }

            </div>
        );
    }
}

export default connect(mapStateToProps, {postLoginTokenSuccess})(CheckToken);