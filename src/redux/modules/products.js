import api from '../../api/api'

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

const initialState = {
};

export function products(state = initialState, action = {}) {
    switch(action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.items,
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        default:
            return state;
    }
}

const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
});

const fetchProductsSuccess = ({ data }) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    items: data
});

const fetchProductsFailure = (err) => ({
    type: FETCH_PRODUCTS_FAILURE,
    err
});



export const fetchAllProducts = () => dispatch => {
    dispatch(fetchProductsRequest());

    return api.fetchProducts()
        .then(res => {
            if(res.status === 200){
                dispatch(fetchProductsSuccess(res))
            }else {
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(fetchProductsFailure(err)))

};