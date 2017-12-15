import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducers';

const enhancer = compose(applyMiddleware(thunk, routerMiddleware(createHistory({basename: '/'}))));

const store = createStore(
  reducers,
  enhancer
);

export default store;

