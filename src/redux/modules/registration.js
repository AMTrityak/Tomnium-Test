import api from '../../api/api';

const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST';
const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS';
const POST_REGISTER_FAILURE = 'POST_REGISTER_FAILURE';
const REGISTERED = 'REGISTERED';
const URL_REGISTRATION = '/user';


const initialState = {
    err: '',
    isAuth: false,
    data: {
    },
};

export const registration = (state = initialState, action) => {
    switch(action.type) {
        case POST_REGISTER_REQUEST:
            return {
                ...state,
                err: false
            };
        case POST_REGISTER_SUCCESS:
            return {
                ...state,
                data: action.data || state.data,
            };
        case POST_REGISTER_FAILURE:
            return {
                ...state,
                err: action.err,
            };
        case REGISTERED:
            return {
                ...state,
                isAuth: true
            };
        default:
            return state
    }
};

const postRegistrationRequest = () => ({
    type: POST_REGISTER_REQUEST
});

const postRegistrationSuccess = ({data}) => ({
    type: POST_REGISTER_SUCCESS,
    data: data,
});

const postRegistrationFailure = (data) => ({
    type: POST_REGISTER_FAILURE,
    err: data,
});

export const registered = () => ({
    type: REGISTERED
});

export const postRegistration = ({ username, password }) => (dispatch) => {
    dispatch(postRegistrationRequest());
    api.instance.post(`${URL_REGISTRATION}`,{username: username, password: password})
        .then((res) =>{
            if(res.status === 201) {
                dispatch(registered());
                dispatch(postRegistrationSuccess(res));
            }
            else{
                dispatch(postRegistrationFailure(res.data))
            }
        })
        .catch((error)=> {
            dispatch(postRegistrationFailure(error))
        })
};
