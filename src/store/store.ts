
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import rootReducer, { RootState } from "../reducers";

const preloadedState: RootState = {
    auth: {}
}

const store = configureStore({
    preloadedState,
    reducer: rootReducer,
    enhancers: [applyMiddleware(thunk)]
});

export default store;
