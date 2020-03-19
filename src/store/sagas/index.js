import {takeLatest, all} from 'redux-saga/effects';
import {Types} from '../ducks/info';

import * as info from './info';

export function* watchAsyncInfo() {
  yield takeLatest(Types.GET_LOCATION_INFO, info.getLocationInfo);
}

export default function* rootSaga() {
  yield all([watchAsyncInfo()]);
}
