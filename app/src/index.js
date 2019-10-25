import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux"
import logger from "redux-logger"
import thunk from  "redux-thunk"
import './index.css';
import App from './App';
import {reducer as splachReducer} from "./reducers/splash"


const rootReducer = combineReducers({
    splash : splachReducer
})


const store = createStore(rootReducer,applyMiddleware(thunk,logger))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, document.getElementById('root'));
