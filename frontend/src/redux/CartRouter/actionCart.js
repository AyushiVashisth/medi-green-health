import axios from "axios";
import * as types from "./actionTypes";
import Swal from "sweetalert2";
export const loca420 = () => async (dispatch) => {
  dispatch({ type: types.REQUEST_SUCCESS });
  try {
    axios
      .get(`https://onemg-database.onrender.com/cart/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res) => {
        // console.log("addCart", res);
        dispatch({ type: types.GET_CART_REQUEST, payload: res.data });
      });
  } catch (error) {
    dispatch({ type: types.REQUEST_ERROR, payload: error.message });
  }
};

export const AddtoCart = (obj) => {
    let data = { ...obj };
    data["quantity"] = 1;

    axios.post(`https://onemg-database.onrender.com/cart/add`, data, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res) => {
        // console.log("addCart", res);
        let icon = false;
        let x = "Product Added to Cart !";
        if (res.data.msg === x) {
            icon = true;
        }
        let z = icon ? "success" : "error";
        // console.log(z);
        Swal.fire({
            position: 'center',
            icon: z,
            title: `${res.data.msg}`,
            showConfirmButton: false,
            timer: 1500
        });
    })
    .catch((error) => {
        console.error("Error adding product to cart:", error);
        if (error.response && error.response.status === 400) {
            // Duplicate key error
            console.error("Duplicate key error:", error.response.data.message);
            // Handle duplicate key error (e.g., show a message to the user)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This product is already in your cart.',
            });
        } else {
            // Other types of errors
            console.error("Server error:", error.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
            });
        }
    });
};


export const UpdateCart = (obj, payload, id) => {
  let data = { ...obj };
  if (data.quantity + payload >= 1) {
    data.quantity = data.quantity + payload;
    axios.patch(`https://onemg-database.onrender.com/cart/update/${id}`, data);
  }
};
export const DeleteCart = (id) => {
  axios
    .delete(`https://onemg-database.onrender.com/cart/delete/${id}`)
    .then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${res.data.message}`,
        showConfirmButton: false,
        timer: 1500
      });
    });
};
