import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postCreateProduct} from "../../redux/modules/createProduct";
import {Link, Redirect} from 'react-router-dom';
import './CreateProduct.css';


const mapStateToProps = store => {
    return {
        isAuth: store.registration.isAuth,
    }
};

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            description: '',
            createdBy: '',
        };
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    handleChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    };

    handleChangeDescr = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    handleChangeCreateBy = (e) => {
        this.setState({
            createdBy: e.target.value
        })
    };

    handleClick = (e) => {
        e.preventDefault();
        this.props.postCreateProduct({...this.state});
        this.setState({
            name: '', price: '', description: '', createdBy: ''
        })
    };

    render() {
        console.log(localStorage.getItem('auth'), 'local')
        return (
            <div>
                {localStorage.getItem('auth') ?
                    <form>
                        <div className='create-product-wrapper'>
                        <h1>Create product</h1>
                        <input
                            type="text"
                            onChange={this.handleChangeName}
                            value={this.state.name}
                            placeholder='Name'/>
                        <input
                            type="text"
                            onChange={this.handleChangePrice}
                            value={this.state.price}
                            placeholder='Price'/>
                        <input
                            type="text"
                            onChange={this.handleChangeDescr}
                            value={this.state.description}
                            placeholder='Description'/>
                        <input
                            type="text"
                            onChange={this.handleChangeCreateBy}
                            value={this.state.createdBy}
                            placeholder='Created By'/>
                        <button className='submit' onClick={this.handleClick}>Create</button>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/products'}>Products</Link>
                        </div>
                    </form>
                    : <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: this.props.location},
                        }}
                    />}
            </div>
        );
    }
}

export default connect(mapStateToProps, {postCreateProduct})(CreateProduct)