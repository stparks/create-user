import React from 'react';
import appReducer from './reducers';

import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { render } from 'react-dom';

import { createRoot } from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import App from './App';




const store = configureStore({reducer:appReducer});



/*
import { createRoot } from 'react-dom/client';

*/


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>

);

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

