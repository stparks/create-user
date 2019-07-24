import React from 'react';
import appReducer from './reducers';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

import App from './App';

const store = createStore(appReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

