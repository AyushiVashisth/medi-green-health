import * as types from "./actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CART_REQUEST: {
      return { ...state, isLoading: false, cart: payload };
    }
    case types.REQUEST_SUCCESS: {
      return { isLoading: true, isError: false };
    }
    case types.REQUEST_ERROR: {
      return { ...state, isLoading: false, isError: true };
    } 

    default: {
      return state;
    }
  }
};

export default CartReducer;
