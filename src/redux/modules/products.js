import api from '../../api/api'

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const initialState = {
};

export function products(state = initialState, action = {}) {
    switch(action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                products: action.items,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        default:
            return state;
    }
}

const fetchProductsRequest = () => ({
    type: FETCH_REQUEST
});

const fetchProductsSuccess = ({ data }) => ({
    type: FETCH_SUCCESS,
    items: data
});

const fetchProductsFailure = (err) => ({
    type: FETCH_FAILURE,
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