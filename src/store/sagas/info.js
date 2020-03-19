import {call, put} from 'redux-saga/effects';
import {getLatLonSuccess, getLocationInfoSuccess} from '../ducks/info';
import {getCity} from '../../services/http';

export function* getLocationInfo(action) {
  const {latitude, longitude} = action.payload;
  try {
    const response = yield getCity({latitude, longitude});
    const city = yield Array.isArray(response.data) &&
      response.data.find(
        e => e.location_type === 'City' || e.location_type === 'Region',
      );

    yield put(getLocationInfoSuccess({city}));
  } catch (error) {
    console.log({error});
  }
}
