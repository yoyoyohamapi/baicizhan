import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './configureStore';

const store = configureStore();

const root = document.getElementById('root');
ReactDom.render(
    <Provider store={store}>
        < App />
    </Provider>,
    root
);
