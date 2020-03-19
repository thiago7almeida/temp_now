import {takeLatest, all} from 'redux-saga/effects';
import {Types as historyTypes} from '../ducks/history';

import * as history from './history';

export function* watchAsyncHistory() {
  yield takeLatest(historyTypes.ASYNC_GET_HISTORY, history.getHistoryAsync);
}

export default function* rootSaga() {
  yield all([watchAsyncHistory()]);
}
