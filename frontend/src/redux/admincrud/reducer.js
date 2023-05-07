import { DELETEPRODUCTSUCCESS, GETPRODUCTSUCCESSSSTATUS, PATCHPRODUCTSUCCESS, POSTPRODUCTSUCCESS, PRODUCTFAILEDSTATUS, PRODUCTREQUESTSTATUS } from "./actiontype"



const initialState ={
    isLoading:false,
    isError:false,
    products:[]
}

export const reducer = (state=initialState,{type,payload}) =>{
 switch(type){
    case PRODUCTREQUESTSTATUS :{
        return {...state,isLoading:true}
    }
    case PRODUCTFAILEDSTATUS : {
        return {...state,isError:true,isLoading:false}
    }
    case GETPRODUCTSUCCESSSSTATUS : {
        return {...state,isLoading:false,products:payload}
    }

    case POSTPRODUCTSUCCESS:{
        return {...state,isLoading:false}
    }

    case DELETEPRODUCTSUCCESS:{
        return{...state,isLoading:false}
    }
    case PATCHPRODUCTSUCCESS:{
        return{...state,isLoading:false}
    }

    default:{
        return state;
    }
 }
}