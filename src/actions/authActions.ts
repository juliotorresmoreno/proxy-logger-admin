import { Dispatch } from "redux";
import config from "../config";
import { Session } from "../models/session";
import { RootState } from "../reducers";

export const LOGIN = "@auth/login";
export type loginPayload = {
    username: string;
    password: string;
};
export const login = (payload: loginPayload) => async (dispatch: Dispatch, getState: () => RootState) => {
    const apiUrl = config.apiUrl;
    const url = `${apiUrl}/auth/sign-in`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const value = await response.json() as Session;
        dispatch({ type: LOGIN, payload: value });
        return;
    }
    const error = await response.json();
    throw new Error(error.message);
}
export type loginFn = (payload: loginPayload) => Promise<void>;
