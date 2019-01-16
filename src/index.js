import React from 'react';
import ReactDOM from 'react-dom';
import './app/assets/styles/index.scss';
import App from './app/components/Main/app.component';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import productReducer from './app/redux/reducers/productReducer';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    products: productReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

// console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
