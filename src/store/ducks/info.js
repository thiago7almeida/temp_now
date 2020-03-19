export const Types = {
  GET_LAT_LON: 'info/GET_LAT_LON',
  GET_LAT_LON_SUCCESS: 'info/GET_LAT_LON_SUCCESS',
  GET_LOCATION_INFO: 'info/GET_LOCATION_INFO',
  GET_LOCATION_INFO_SUCCESS: 'info/GET_LOCATION_INFO_SUCCESS',
};

const initialState = {
  location: null,
  city: null,
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
    default:
      return state;
  }
}

export function getLatLon() {
  return {
    type: Types.GET_LAT_LON,
  };
}
export function getLatLonSuccess({location}) {
  return {
    type: Types.GET_LAT_LON_SUCCESS,
    data: {location},
  };
}
export function getLocationInfo({latitude, longitude}) {
  return {
    type: Types.GET_LOCATION_INFO,
    data: {latitude, longitude},
  };
}
export function getLocationInfoSuccess({city}) {
  return {
    type: Types.GET_LOCATION_INFO_SUCCESS,
    data: {city},
  };
}
