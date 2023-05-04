import axios from "axios";
import * as types from "./actionTypesProduct";

export const getData = () => async (dispatch) => {
  dispatch({ type: types.REQUEST_SUCCESS });
  try {
    let result = await axios.get(`http://localhost:8080/products`);
    dispatch({ type: types.GET_PRODUCT_REQUEST, payload: result.data });
    return result.data;
  } catch (error) {
    dispatch({ type: types.REQUEST_ERROR, payload: error.message });
  }
};