import React, {Component} from 'react';
import './AllProducts.css';
import {connect} from 'react-redux';
import {fetchAllProducts} from '../../redux/modules/products';
import {Link} from 'react-router-dom';

const mapStateToProps = store => {
    return {
        products: store.products.products
    }
};


class AllProducts extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        return (
            <div className='products-wrapper'>
                {this.props.products && this.props.products.map(item =>
                    <Link to={`product/${item._id}`} key={item._id}>
                        <div className='product-item'>
                            <h1>{item.name && item.name}</h1>
                            <span>Price: {item.price && item.price}</span>
                            <p>Description: {item.description && item.description}</p>
                            <h3>Created By: {item.createdBy && item.createdBy}</h3>
                        </div>
                    </Link>
                )}
                <Link to={'/login'}>Login</Link>
                <Link to={'/product/new'}>New Product</Link>
            </div>
        );
    }
}

export default connect(mapStateToProps, {fetchAllProducts})(AllProducts);