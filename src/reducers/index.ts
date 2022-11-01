
import { combineReducers } from "redux";
import authReducer, { AuthState } from "./authReducer";

export type RootState = {
    auth: AuthState
};

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
