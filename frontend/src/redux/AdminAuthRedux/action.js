import axios from "axios"
import { LOGINFAILEDSTATUS, LOGINREQUESTSTATUS, LOGINSUCCESSSTATUS } from "./actiontype";


export const postLogin = (obj) => (dispatch) =>{
    dispatch({type:LOGINREQUESTSTATUS})
   return axios.post(`https://reqres.in/api/login`,obj)
    .then((res)=>{
        console.log(res.data.token);
        dispatch({type:LOGINSUCCESSSTATUS,payload:res.data.token})
    })
    .catch(()=> dispatch({type:LOGINFAILEDSTATUS}) )
}