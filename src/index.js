import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import loanReducer from './store/loanReducer';
import breadReducer from './store/breadReducer';
import costReducer from './store/costReducer';


const store = createStore(combineReducers({reducer,loanReducer,breadReducer,costReducer}));

ReactDOM.render(
  <React.StrictMode>
  <Provider store ={store}>  <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
