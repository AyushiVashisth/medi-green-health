import axios from "axios";
import * as types from "./actionTypes";
import Swal from "sweetalert2";
export const loca420 = () => async (dispatch) => {
    dispatch({ type: types.REQUEST_SUCCESS });
    try {
        axios
            .get(`https://onemg-database.onrender.com/cart/`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then((res) => {
                console.log(res);
                dispatch({ type: types.GET_CART_REQUEST, payload: res.data });
            });
    } catch (error) {
        dispatch({ type: types.REQUEST_ERROR, payload: error.message });
    }
};

export const AddtoCart = (obj) => {
    let data = { ...obj };
    data["quantity"] = 1
    console.log(data)
    axios.post(`https://onemg-database.onrender.com/cart/add`, data, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => {
        // console.log(res)
        let icon = false;
        let x = "Product Added to Cart !"
        if (res.data.msg == x) {
            icon = true
        }
        let z = icon ? "success" : "error"
        console.log(z)
        Swal.fire({
            position: 'center',
            icon: z,
            title: `${res.data.msg}`,
            showConfirmButton: false,
            timer: 1500
        })
    })
}
export const UpdateCart = (obj, payload, id) => {
    let data = { ...obj };
    if (data.quantity + payload >= 1) {

        data.quantity = data.quantity + payload
        axios.patch(`https://onemg-database.onrender.com/cart/update/${id}`, data)
    }
}
export const DeleteCart = (id) => {
    axios.delete(`https://onemg-database.onrender.com/cart/delete/${id}`).then((res) => {
        Swal.fire({
            position: 'center',
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1500
        })
    })
}
