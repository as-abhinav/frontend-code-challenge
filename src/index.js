import 'materialize-css/dist/js/materialize';
import React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppContainer from './containers/app';
import './index.css';

import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);
