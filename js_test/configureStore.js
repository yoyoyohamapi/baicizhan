import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
}