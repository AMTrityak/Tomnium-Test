import api from '../../api/api';

const POST_LOGIN_TOKEN_REQUEST = 'POST_LOGIN_TOKEN_REQUEST';
const POST_LOGIN_TOKEN_SUCCESS = 'POST_LOGIN_TOKEN_SUCCESS';
const POST_LOGIN_TOKEN_FAILURE = 'POST_LOGIN_TOKEN_FAILURE';
const URL_TOKEN = '/login';

const initialState = {
    err: false,
    isAuth: false,
    data: {}
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


const loginTokenRequest = () => ({
    type: POST_LOGIN_TOKEN_REQUEST
});

export const loginTokenSuccess = ({data}) => ({
    type: POST_LOGIN_TOKEN_SUCCESS,
    token: data,
});

const loginTokenFailure = (err) => ({
    type: POST_LOGIN_TOKEN_FAILURE,
    err
});


export const postLogin = ({ username, password }) => (dispatch) => {
    dispatch(loginTokenRequest());
    api.instance.post(`${URL_TOKEN}`,{username: username, password: password})
        .then((res) =>{
            dispatch(loginTokenSuccess(res));
        })
        .catch((error)=> {
            dispatch(loginTokenFailure(error))
        })

};