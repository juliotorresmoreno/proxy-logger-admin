
import React from "react";
import { connect } from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AboutPage from "../pages/AboutPage";
import AuthPage from "../pages/AuthPage";
import ConfigPage from "../pages/ConfigPage";
import { RootState } from "../reducers";
import { AuthState } from "../reducers/authReducer";

const mapState = (state: RootState) => ({
    auth: state.auth
});

type _AppRouterProps = {
    auth: AuthState
}

const _AppRouter: React.FC<_AppRouterProps> = ({ auth }) => {
    return (
        <BrowserRouter>
            {auth.session ? (
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<ConfigPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Route>
                </Routes>
            ) : (
                <AuthPage />
            )}
        </BrowserRouter>
    );
}

const AppRouter = connect(mapState)(_AppRouter);

export default AppRouter;
