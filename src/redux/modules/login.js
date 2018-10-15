import api from '../../api/api';

const POST_LOGIN_TOKEN_REQUEST = 'POST_LOGIN_TOKEN_REQUEST';
const POST_LOGIN_TOKEN_SUCCESS = 'POST_LOGIN_TOKEN_SUCCESS';
const POST_LOGIN_TOKEN_FAILURE = 'POST_LOGIN_TOKEN_FAILURE';

const initialState = {
    err: false,
    isAuth: false,
    data: {

    }
};


export const login = (state = initialState, action) => {
    switch(action.type) {
        case POST_LOGIN_TOKEN_REQUEST:
            return {
                ...state,
                err: false
            };
        case POST_LOGIN_TOKEN_SUCCESS:
            api.setToken(action.token);
            return {
                token: action.token,
                isAuth: true
            };
        case POST_LOGIN_TOKEN_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        default:
            return state
    }
};


const postLoginTokenRequest = () => ({
    type: POST_LOGIN_TOKEN_REQUEST
});

const postLoginTokenSuccess = ({data}) => ({
    type: POST_LOGIN_TOKEN_SUCCESS,
    token: data,
});

const postLoginTokenFailure = (err) => ({
    type: POST_LOGIN_TOKEN_FAILURE,
    err
});


export const postLogin = ({ username, password }) => (dispatch) => {
    dispatch(postLoginTokenRequest());
    return api.loginToken({ username, password })
        .then(res => {
            console.log(res);
            if(res.status === 200) {
                dispatch(postLoginTokenSuccess(res));
            }
            else{
                dispatch(postLoginTokenFailure(true))
            }
        })
        .catch(err => {
            console.log(err)
        })

};