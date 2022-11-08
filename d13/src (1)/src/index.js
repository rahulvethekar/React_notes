import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './middleware/thunk';
const initialState={count:10,postData:[],cartData:localStorage.getItem('mycart')!=undefined?JSON.parse(localStorage.getItem('mycart')):[]};
function reducer(state=initialState,actions){
     switch(actions.type){
        case 'INC' : return {...state,count:state.count+actions.payload}
        case 'DEC' : return {...state,count:state.count-actions.payload}
        case 'ADDCART' : return {...state,cartData:actions.payload}
        case 'POSTDATA' : return {...state,postData:actions.payload}
        default : return state;
     }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducer,applyMiddleware(thunk));
store.dispatch(rootReducer())
root.render(
  <Provider store={store}>
       <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
