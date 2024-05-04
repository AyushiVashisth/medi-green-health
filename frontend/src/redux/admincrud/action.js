import axios from "axios";
import {
  DELETEPRODUCTSUCCESS,
  GETPRODUCTSUCCESSSSTATUS,
  PATCHPRODUCTSUCCESS,
  POSTPRODUCTSUCCESS,
  PRODUCTFAILEDSTATUS,
  PRODUCTREQUESTSTATUS,
} from "./actiontype";

export const get_products = (dispatch) => {
  dispatch({ type: PRODUCTREQUESTSTATUS });
  axios
    .get(`https://onemg-database.onrender.com/vitamin`)
    .then((res) => {
    //   console.log(res.data);
      dispatch({ type: GETPRODUCTSUCCESSSSTATUS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCTFAILEDSTATUS });
    });
};




export const postProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCTREQUESTSTATUS });

 return axios
    .post(`https://onemg-database.onrender.com/vitamin/add`, data)
    .then((res) => dispatch({type : POSTPRODUCTSUCCESS}))
    .catch((err) => dispatch({ type: PRODUCTFAILEDSTATUS }));
};





export const deleteProduct = (id) =>  (dispatch) => {
  dispatch({ type: PRODUCTREQUESTSTATUS });
  return axios
    .delete(`https://onemg-database.onrender.com/vitamin/delete/${id}`)
    .then((res) => {
      // console.log(res);
      dispatch({ type: DELETEPRODUCTSUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCTFAILEDSTATUS });
    });
};



export const patchProduct = (data,id)=>  (dispatch)=>{
    dispatch({type:PRODUCTREQUESTSTATUS})
    return axios.patch(`https://onemg-database.onrender.com/vitamin/update/${id}`,data).then((res)=>{
      // console.log(res)
      dispatch({type:PATCHPRODUCTSUCCESS,payload:res.data})
    }).catch((err)=>console.log(err))
  
  }



