import {receiveProperties, requestProperties} from '../actions/app';
import app from './app';

describe('App Properties Reducer', () => {

  let defaultState = {
    isFetching: false,
    properties: []
  };

  it('should return initial state', () => {
    let defaultAction = {type: null};

    expect(app(defaultState, defaultAction)).toEqual(defaultState);
  });

  it('should return existing state when properties requested', () => {
    let action = requestProperties(),
      expectedState = {
        isFetching: true,
        properties: []
      };
    expect(app(defaultState, action)).toEqual(expectedState);
  });

  it('should return Properties list as data', () => {
    const property = {
      purpose: 1,
      _id: {
        $id: 1
      },
      title: 'TITLE',
      realestateSummary: {
        address: {
          postalCode: 2,
          city: 'CITY',
          street: 'STREET'
        },
        numberOfRooms: 3,
        space: 43
      },
      advertisementAssets: {
        '0': {
          titlePicture: true,
          advertisementThumbnails: {
            inventory_m: {
              url: 'SOME_URL'
            }
          }
        }
      },
      advertisementPrice: {
        sellPrice: 223
      }
    };

    const action = receiveProperties({data: [property]});
    const expectedState = {
      ...defaultState,
      properties: [{
        'address': '2 CITY / STREET',
        'area': 'ab 43 m²',
        'id': 1,
        'image': {
          'url': 'SOME_URL',
        },
        'price': '€ 223.00',
        'purpose': 'Kaufen',
        'rooms': '3 Zimmer',
        'title': 'TITLE',
      }]
    };

    expect(app(defaultState, action)).toEqual(expectedState);
  });

});

