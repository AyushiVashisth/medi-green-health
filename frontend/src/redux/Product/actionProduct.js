import axios from "axios";
import * as types from "./actionTypesProduct";

export const getData = (obj) => async (dispatch) => {
  dispatch({ type: types.REQUEST_SUCCESS });
  try {
    axios
      .get(`https://onemg-database.onrender.com/vitamin`, obj)
      .then((res) => {
        // console.log("product", res.data);
        dispatch({ type: types.GET_PRODUCT_REQUEST, payload: res.data });
      });
  } catch (error) {
    dispatch({ type: types.REQUEST_ERROR, payload: error.message });
  }
};
