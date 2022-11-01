
import React, { useState } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { Alert, Button, Form, FormGroup, Input, Label } from "reactstrap";
import { bindActionCreators } from "redux";
import { login, loginFn } from "../actions/authActions";
import { RootState } from "../reducers";
import './AuthPage.css';

const mapStateToProps = (state: RootState) => ({

});

const mapDispatchToProps: MapDispatchToProps<{}, {}> = (dispatch, getState: any) => {
    return bindActionCreators({ login }, dispatch);
};

type _AuthPageProps = {
    login: loginFn
}

const _AuthPage: React.FC<_AuthPageProps> = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (evt) => {
        evt.preventDefault();
        setError('');
        await props
            .login({
                username,
                password
            })
            .catch((err: Error) => setError(err.message));
    };
    return (
        <div className="AuthPage">
            <h2>Sign In</h2>
            <Form className="form" onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={evt => setUsername(evt.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={evt => setPassword(evt.target.value)}
                    />
                </FormGroup>
                {error ? (
                    <Alert color="danger">
                        {error}
                    </Alert>
                ) : null}
                <Button color="primary">Submit</Button>
            </Form>
        </div>
    );
};

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps>
    = connect(mapStateToProps, mapDispatchToProps)(_AuthPage) as any;

export default AuthPage;
