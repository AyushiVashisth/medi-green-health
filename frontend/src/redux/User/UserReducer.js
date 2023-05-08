import { GET_USER_REQUEST, REQUEST_ERROR, REQUEST_SUCCESS } from "./actionTypes";

const initialState = {
    token: "",
    isAuth: false,    
    isLoading: false,
    isError: false,
    name: "",
};

const UserReducer = (state = initialState, action) => {
    const { type, payload } = action;
   
 
    switch (type) {
        case GET_USER_REQUEST: {
            return { ...state, isLoading: false,isAuth:true,name:payload.name,token:payload.token};
        }
        case REQUEST_SUCCESS: {
            return { isLoading: true, isError: false };
        }
        case REQUEST_ERROR: {
            return { ...state, isLoading: false, isError: true };
        }

        default: {
            return state;
        }
    }
};

export default UserReducer;
