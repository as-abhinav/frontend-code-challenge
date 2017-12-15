// import {fetchApi} from '../utils/apiUtils';
// import {CONSTANTS} from '../utils/constants';
import data from '../data/properties.json';
import {propertyTransformer} from '../utils/propertyTransformer';

export const REQUEST_PROPERTIES = 'REQUEST_PROPERTIES';
export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';

export const requestProperties = () => {
  return {
    type: REQUEST_PROPERTIES
  };
};

export const receiveProperties = (data) => {
  return {
    type: RECEIVE_PROPERTIES,
    data: propertyTransformer(data)
  };
};

export const fetchProperties = () => {
  return async (dispatch) => {
    dispatch(requestProperties());
    // const result = await fetchApi(CONSTANTS.API_URL);

    // TODO:
    // Fetch is not working for API due to CORS issue and response type is opaque.
    // Using response from the same API as JSON object untill resolved.
    dispatch(receiveProperties(data));
  };
};

