import {call, put} from 'redux-saga/effects';
import {
  getLocationInfoDetatilsSuccess,
  getLocationInfoSuccess,
} from '../ducks/info';
import {getCity, getInfo} from '../../services/http';

export function* getLocationInfo(action) {
  const {latitude, longitude} = action.payload;
  try {
    const response = yield getCity({latitude, longitude});
    const city = yield Array.isArray(response.data) &&
      response.data.find(
        e => e.location_type === 'City' || e.location_type === 'Region',
      );
    yield put(getLocationInfoSuccess({city}));
    try {
      const response = yield getInfo({id: city.woeid});
      yield put(
        getLocationInfoDetatilsSuccess({
          info: response.data.consolidated_weather,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log({error});
  }
}
