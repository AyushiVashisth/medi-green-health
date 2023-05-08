import { LOGINFAILEDSTATUS, LOGINREQUESTSTATUS, LOGINSUCCESSSTATUS } from "./actiontype"

const initState = {
 adminisAuth:false,
 token:"",
 isLoading:"",
 isError:"",
}

export const reducer = (state=initState,{type,payload}) =>{
    switch(type){
        case LOGINREQUESTSTATUS : {
            return {...state,isLoading:true}
        }
        case LOGINSUCCESSSTATUS : {
            return {...state,isLoading:false,adminisAuth:true,token:payload}
        }
        case LOGINFAILEDSTATUS : {
            return {...state,isLoading:false,isError:true}
        }
        default:return state;
    }
}