import api from "../../api/api";

const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';
const URL_CREATE_PRODUCT = '/product/new';

const initialState = {
    err: false,
    data: {}
};

export const createProduct = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                err: false
            };
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.data || state.data,
            };
        case CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        default:
            return state
    }
};



const createProductRequest = () => ({
    type: CREATE_PRODUCT_REQUEST
});

const createProductSuccess = ({data}) => ({
    type: CREATE_PRODUCT_SUCCESS,
    ...data,
});

const createProductFailure = (err) => ({
    type: CREATE_PRODUCT_FAILURE,
    err
});

export const postCreateProduct = ({name, price, description, createdBy}) => (dispatch) => {
    dispatch(createProductRequest());
    api.instance.post(`${URL_CREATE_PRODUCT}`,{name, price, description, createdBy})
        .then((res) =>{
            dispatch(createProductSuccess(res));
        })
        .catch((error)=> {
            dispatch(createProductFailure(error))
        })

};