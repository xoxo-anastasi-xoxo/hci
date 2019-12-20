import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {rootReducer} from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
