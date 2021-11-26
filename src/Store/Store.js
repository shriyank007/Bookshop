import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/IRed";

const storage=createStore(rootReducer,applyMiddleware(thunk));
export default storage;