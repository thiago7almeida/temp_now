export const Types = {
  GET_LAT_LON: 'info/GET_LAT_LON',
  GET_LAT_LON_SUCCESS: 'info/GET_LAT_LON_SUCCESS',
  GET_LOCATION_INFO: 'info/GET_LOCATION_INFO',
  GET_LOCATION_INFO_SUCCESS: 'info/GET_LOCATION_INFO_SUCCESS',
  GET_LOCATION_INFO_DETAILS_SUCCESS: 'info/GET_LOCATION_INFO_DETAILS_SUCCESS',
};

const initialState = {
  location: null,
  city: null,
  info: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_LAT_LON_SUCCESS:
      return {
        ...state,
        location: action.payload.location,
      };
    case Types.GET_LOCATION_INFO_SUCCESS:
      return {
        ...state,
        city: action.payload.city,
      };
    case Types.GET_LOCATION_INFO_DETAILS_SUCCESS:
      return {
        ...state,
        info: action.payload.info,
      };
    default:
      return state;
  }
}

export function getLatLonSuccess({location}) {
  return {
    type: Types.GET_LAT_LON_SUCCESS,
    payload: {location},
  };
}
export function getLocationInfo({latitude, longitude}) {
  return {
    type: Types.GET_LOCATION_INFO,
    payload: {latitude, longitude},
  };
}
export function getLocationInfoSuccess({city}) {
  return {
    type: Types.GET_LOCATION_INFO_SUCCESS,
    payload: {city},
  };
}
export function getLocationInfoDetatilsSuccess({info}) {
  return {
    type: Types.GET_LOCATION_INFO_DETAILS_SUCCESS,
    payload: {info},
  };
}
