import React from 'react';
import ReactDOM from 'react-dom/client';
import  { BrowserRouter } from 'react-router-dom';
import App from './App';

import { createStore } from 'redux';
import rootReducer from './redux_module/';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);