import {RECEIVE_PROPERTIES, REQUEST_PROPERTIES} from '../actions/app';

let defaultState = {
  isFetching: false,
  properties: []
};

export default (state = defaultState, action) => {
  switch ( action.type ) {
    case RECEIVE_PROPERTIES:
      return {...state, properties: action.data, isFetching: false};

    case REQUEST_PROPERTIES:
      return {...state, isFetching: true};
    default:
      return {...state};
  }
};

