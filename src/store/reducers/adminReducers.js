import actionTypes from '../actions/actionTypes';

const initialState = {
    gender:[],
    roles:[],
    position:[]
}

const adminReducers = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.FETCH_GENDER_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        default:
            return state;
    }
}

export default adminReducers;