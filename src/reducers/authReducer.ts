import { Action, createReducer } from "@reduxjs/toolkit";
import { LOGIN } from "../actions/authActions";
import { Session } from "../models/session";

export type AuthState = {
    session?: Session
};

const initialState: AuthState = {};

const authReducer = createReducer<AuthState>(initialState, (builder) => {
    type loginAction = Action & { payload: Session };
    builder
        .addCase<any, loginAction>(LOGIN, (state, action) => {
            state.session = action.payload;
        });
});

export default authReducer;
