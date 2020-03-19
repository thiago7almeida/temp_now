import {call, put} from 'redux-saga/effects';
import {getHitorySuccess} from '../ducks/history';

export function* getHistoryAsync(action) {
  try {
    yield put(getHitorySuccess({data: newData}));
  } catch (error) {
    console.log({error});
  }
}
