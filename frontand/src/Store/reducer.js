import {ORDER_MESSAGES_ERROR, ORDER_MESSAGES_REQUEST, ORDER_MESSAGES_SUCCESS} from "./actionOrder";

const initialState ={
    messages: null,
    loading: true,
    err: null
};

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case ORDER_MESSAGES_SUCCESS:
            return {...state, messages: action.messages};
        case ORDER_MESSAGES_REQUEST:
            return {...state, loading: action.boolean};
        case ORDER_MESSAGES_ERROR:
            return {...state, err: action.err};
        default:
            return state
    }
};

export default reducer;