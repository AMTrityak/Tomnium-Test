import api from "../../api/api";

const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST';
const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS';
const POST_CREATE_FAILURE = 'POST_CREATE_FAILURE';
const URL_CREATE_PRODUCT = '/product/new';

const initialState = {
    err: false,
    data: {}
};

export const createProduct = (state = initialState, action) => {
    switch(action.type) {
        case POST_CREATE_REQUEST:
            return {
                ...state,
                err: false
            };
        case POST_CREATE_SUCCESS:
            return {
                ...state,
                data: action.data || state.data,
            };
        case POST_CREATE_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        default:
            return state
    }
};



const postCreateRequest = () => ({
    type: POST_CREATE_REQUEST
});

const postCreateSuccess = ({data}) => ({
    type: POST_CREATE_SUCCESS,
    ...data,
});

const postCreateFailure = (err) => ({
    type: POST_CREATE_FAILURE,
    err
});

export const postCreateProduct = ({name, price, description, createdBy}) => (dispatch) => {
    dispatch(postCreateRequest());
    api.instance.post(`${URL_CREATE_PRODUCT}`,{name: name, price: price, description: description, createdBy: createdBy})
        .then((res) =>{
            dispatch(postCreateSuccess(res));
        })
        .catch((error)=> {
            dispatch(postCreateFailure(error))
        })

};