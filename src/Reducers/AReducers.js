import { authConstant } from '../Actions/ActionConst.js'
const initState={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    message:'',
    error:'',
    authentiCated:'',
    authenticating:''

}
const AReducers=(state=initState,action)=>{
    console.log(action);
    switch(action.type){
        case `${authConstant.USER_REGISTER}_REQUEST`:
            return{
                ...state
            };
            case `${authConstant.USER_REGISTER}_SUCCESS`:
                return state={
                    ...state,
                    authentiCated:true,
                    authenticating:action.payload.userToken,
                    message:action.payload.message
                }
                case `${authConstant.USER_REGISTER}_FAILURE`:
                return state={
                    ...state,
                    message:action.payload.error
                }
                default:
                    return state;
              
    }

}
export default AReducers;