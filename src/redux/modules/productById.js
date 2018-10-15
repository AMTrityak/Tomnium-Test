import api from "../../api/api";

export const FETCH_ID_REQUEST = 'FETCH_ID_REQUEST';
export const FETCH_ID_SUCCESS = 'FETCH_ID_SUCCESS';
export const FETCH_ID_FAILURE = 'FETCH_ID_FAILURE';


const initialState = {
};


export function productById(state = initialState, action = {}) {
    switch(action.type) {
        case FETCH_ID_REQUEST:
            return {
                ...state,
                err: false
            };
        case FETCH_ID_SUCCESS:
            return {
                ...state,
                data: action.items,
            };
        case FETCH_ID_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        default:
            return state;
    }
}


const fetchProductIdRequest = () => ({
    type: FETCH_ID_REQUEST
});

const fetchProductIdSuccess = ({ data }) => ({
    type: FETCH_ID_SUCCESS,
    items: data
});

const fetchProductIdFailure = (err) => ({
    type: FETCH_ID_FAILURE,
    err
});

export const FetchProduct = (id) => (dispatch) => {
    dispatch(fetchProductIdRequest());

    return api.fetchProductById(id)
        .then(res => {
            if(res.status === 200){
                dispatch(fetchProductIdSuccess(res));
            }
            else{
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(fetchProductIdFailure(err)))

};