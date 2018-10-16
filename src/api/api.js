import axios from 'axios';

const URL_PRODUCTS = '/products';
const URL_PRODUCT_ID = '/product';

axios.defaults.headers.common = {
    'Content-Type': 'application/json',
};

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

const fetchProducts = () => {
     return instance.get(URL_PRODUCTS);
};

const fetchProductById = (id) => {
    return instance.get(`${URL_PRODUCT_ID}/${id}`)
};

export function setToken(token) {
    instance.defaults.headers.common['auth'] = `${token}`;
    localStorage.setItem('auth', token);
}


export default {fetchProducts, fetchProductById, setToken, instance};