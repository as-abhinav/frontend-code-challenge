import {fetchProperties} from '../actions/app';
import {mapDispatchToProps, mapStateToProps} from './app';

const storeFake = (state) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return {...state};
    },
  };
};

describe('App Container', () => {

  const properties = {};

  const state = {
    app: {
      properties: {},
      isFetching: false
    }
  };

  it('should return all properties data', () => {
    const props = mapStateToProps(state);
    const expectedProps = {
      isFetching: false,
      properties: state.app.properties
    };

    expect(props).toEqual(expectedProps);
  });

  it('should inject fetch methods into the app', () => {
    const dispatch = jasmine.createSpy('dispatch');

    const result = mapDispatchToProps(dispatch);

    expect(result.getProperties).toBeDefined();
  });

  it('should set isFetching to false when all the necessary data has been fetched', () => {
    const state = {
      app: {
        properties: {},
        isFetching: false
      }
    };
    const props = mapStateToProps(state);
    expect(props.isFetching).toEqual(false);
  });

  // Need to relook in this.
  it('should map action dispatchers with props', () => {
    expect(mapDispatchToProps(storeFake().dispatch).getProperties()).toEqual(storeFake().dispatch(fetchProperties));
  });
});
