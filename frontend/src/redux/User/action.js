import axios from "axios";
import {
  GET_USER_REQUEST,
  REQUEST_ERROR,
  REQUEST_SUCCESS
} from "./actionTypes";

export const loca420 = (obj) => async (dispatch) => {
  dispatch({ type: REQUEST_SUCCESS });
  try {
    axios
      .post(`https://onemg-database.onrender.com/users/login`, obj)
      .then((res) => {
        // console.log("actionLogin", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("data", JSON.stringify(res.data.msg));
        localStorage.setItem("name", res.data.name);
        dispatch({ type: GET_USER_REQUEST, payload: res.data });

        return true;
      });
  } catch (error) {
    dispatch({ type: REQUEST_ERROR, payload: error.message });
  }
};
