
import React from 'react';
import AppRouter from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = (props) => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;
