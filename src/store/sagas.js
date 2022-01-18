/* eslint-disable prettier/prettier */
import {getTopPhotosRequest} from '../api';
import {put, takeLatest, all} from '@redux-saga/core/effects';

function* getTopPhotos({payload}) {
  try {
    const res = yield getTopPhotosRequest(payload);
    if (res.data.length > 0) {
      yield put({
        type: 'API_SUCCESS',
        data: res.data,
      });
    } else {
      yield put({type: 'API_LIST_END'});
    }
  } catch (err) {
    yield put({
      type: 'API_FAILURE',
      error: err.message,
    });
  }
}

function* topPhotosSaga() {
  yield takeLatest('API_REQUEST', getTopPhotos);
}

export default function* rootSaga() {
  yield all([topPhotosSaga()]);
}
