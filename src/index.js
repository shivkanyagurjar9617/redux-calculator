import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';
let initialState ={
  result:0,
  leftValue:'',
  operator:'',
  rightValue:'',
}
let store = createStore(rootReducer,initialState,applyMiddleware(thunk))
 
  
  console.log(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

