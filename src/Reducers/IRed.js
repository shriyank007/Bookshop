import { combineReducers } from 'redux';
import AReducers from './AReducers';

const rootReducer=combineReducers({
    auth:AReducers
})
export default rootReducer; 