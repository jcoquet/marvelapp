import React from 'react';
import { render } from 'react-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import marvelApp from './reducers';
import Root from './components/Root';
import { fetchCharacters } from './actions';

const loggerMiddleware = createLogger()

const store = createStore(
    marvelApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store.dispatch(fetchCharacters(100));

render(
    <Root store={store} />,
    document.getElementById('root')
)

registerServiceWorker();
