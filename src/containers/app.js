import {connect} from 'react-redux';

import {fetchProperties} from '../actions/app';
import {App} from '../components/app/app';

export const mapStateToProps = (state) => {
  return {
    properties: state.app.properties,
    isFetching: state.app.isFetching
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: () => {
      dispatch(fetchProperties());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
