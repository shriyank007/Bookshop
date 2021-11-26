import { authConstant } from "./ActionConst";
import axios from 'axios';
  
export const signUp=(user)=>{
    return async (dispatch)=>{
        dispatch({type: `${authConstant.USER_REGISTER}_REQUEST`});
        axios.post(`https://project-node-1.herokuapp.com/postUserData`,user)
        .then((res)=>{
            const msg=res.data.message
            console.log(res.data);
            dispatch({type: `${authConstant.USER_REGISTER}_SUCCESS`,
            payload:{message:msg,data:res.data}})
        }).catch((err)=>{
            dispatch({type: `${authConstant.USER_REGISTER}_FAILURE`,
            payload:{error:"Data not registered"}})

        })

    }

}
export const signIn=(user)=>{
    return async (dispatch)=>{
        dispatch({type: `${authConstant.USER_LOGIN}_REQUEST`});
        axios.post(`https://project-node-1.herokuapp.com/postLoginData`,user)
        .then((res)=>{
            const msg=res.data.message
            console.log(res.data);
            window.sessionStorage.setItem('token',res.data.token)
            dispatch({type: `${authConstant.USER_LOGIN}_SUCCESS`,
            payload:{message:msg,userToken:res.data.token}})
        }).catch((err)=>{
               console.log(err);
            dispatch({type: `${authConstant.USER_LOGIN}_FAILURE`,
            payload:{error:"Not able to login"}})

        })
    }

}
export const logout=()=>{
    return async (dispatch)=>{
        dispatch({type: `${authConstant.USER_LOGOUT}_REQUEST`});
      if(sessionStorage.getItem('token')!==""){
          sessionStorage.clear();
          dispatch({type: `${authConstant.USER_LOGOUT}_SUCCESS`,payload:{message:"logout"}});
      }else{
        dispatch({type: `${authConstant.USER_LOGOUT}_FAILURE`,payload:{message:"failed"}});
      }
      }
    }