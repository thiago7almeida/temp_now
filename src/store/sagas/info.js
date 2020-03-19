import {call, put} from 'redux-saga/effects';
import {getLatLonSuccess} from '../ducks/info';
import {
  hasLocationPermission,
  getLocation as getLocationService,
} from '../../services/Geolocation';

export function* getLocation(action) {
  try {
    const {message, permission} = yield hasLocationPermission();
    if (!permission) yield console.log(message);
    else {
      yield getLocationService(
        position => getLatLonSuccess({location: position}),
        error => console.log(error),
      );
    }
  } catch (error) {
    console.log({error});
  }
}
