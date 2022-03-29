import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* desde aqui se añade lo de redux, estas lineas no cambian. */
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer';
import { createStore, applyMiddleware } from 'redux'; /* creo la tienda y el middleware para darle sincronizada a redux y hacer llamadas . */

const reduxStore = createStore(mainReducer,applyMiddleware(thunk))



ReactDOM.render(
   
    <Provider store={reduxStore}> {/* se engloba la app */}
        <App /> 
    </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
