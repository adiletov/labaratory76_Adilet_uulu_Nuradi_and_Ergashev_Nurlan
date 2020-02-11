import axiosApi from "../axiosApi";

export const ORDER_MESSAGES_SUCCESS = 'ORDER_MESSAGES_SUCCESS';
export const ORDER_MESSAGES_REQUEST = 'ORDER_MESSAGES_REQUEST';
export const ORDER_MESSAGES_ERROR = 'ORDER_MESSAGES_ERROR';


export const getMessages = (messages) => ({type: ORDER_MESSAGES_SUCCESS, messages});
export const orderRequest = (boolean) => ({type: ORDER_MESSAGES_REQUEST, boolean});
export const orderMessagesError = (err) => ({type: ORDER_MESSAGES_ERROR, err});


export const getAllMessage = () => {
    return async (dispatch) =>{
        try{
            const res = await axiosApi.get('/messages');
            dispatch(getMessages(res.data));
        }catch (e) {
            dispatch(orderMessagesError())
        }
    }
};

export const postRequireMessage = (message) => {
    return async (dispatch) =>{
        try{
            dispatch(orderRequest(false));
            await axiosApi.post('/messages', message);
            dispatch(orderRequest(true));
        }catch (e) {
            const err = e.response.status + e.response.data.error;
           dispatch(orderMessagesError(err));
            dispatch(orderRequest(true));
        }
    }
};

export const getMessageDateTime = (date) => {
    return async(dispatch) =>{
        try{
            const res = await axiosApi.get(`/messages?datetime=${date}`);
            dispatch(getMessages(res.data))
        }catch (e) {
            dispatch(orderMessagesError(e))
        }
    }
};


