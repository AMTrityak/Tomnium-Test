import {combineReducers} from 'redux';
import {registration} from './registration';
import {products} from './products';
import {productById} from './productById';
import {createProduct} from './createProduct';
import {login} from "./login";

export const rootReducer = combineReducers({
    products,
    productById,
    registration,
    createProduct,
    login,
});