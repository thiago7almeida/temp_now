import {takeLatest, all} from 'redux-saga/effects';
import {Types} from '../ducks/info';

import * as info from './info';

export function* watchAsyncInfo() {
  yield takeLatest(Types.GET_LAT_LON, info.getLocation);
}

export default function* rootSaga() {
  yield all([watchAsyncInfo()]);
}
