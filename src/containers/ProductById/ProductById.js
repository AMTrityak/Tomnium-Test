import React, { Component } from 'react';
import { connect } from 'react-redux';
import './productById.css';
import {FetchProduct} from '../../redux/modules/productById';
import {Link} from "react-router-dom";

const mapStateToProps = store => {
    return {
        productId: store.productById
    }
};

class ProductById extends Component {
    componentDidMount() {
        const {FetchProduct} = this.props;
        const  id = this.props.match.params.id;
        FetchProduct(id);
    }

    render() {
        return (
            <div className='product-wrapper'>
                {this.props.productId.data &&
                <div>
                    <h1>Name product: {this.props.productId.data.name}</h1>
                    <p>Price product: {this.props.productId.data.price}</p>
                    <p>Description: {this.props.productId.data.description}</p>
                    <p>Created By: {this.props.productId.data.createdBy}</p>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/product/new'}>New Product</Link>
                    <Link to={'/products'}>Products</Link>
                </div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, {FetchProduct})(ProductById);