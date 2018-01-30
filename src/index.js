import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers/index";
import './index.css';
import route from './route';
import registerServiceWorker from './registerServiceWorker';

const store=createStore(reducer,applyMiddleware(logger,thunk));

ReactDOM.render(
  <Provider store={store}>
    { route }
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
