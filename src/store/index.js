import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
const persistConfig = {
  key: 'gol_test',
  stateReconciler: autoMergeLevel2,
  storage: AsyncStorage,
  whitelist: ['info'],
};

import rootSaga from './sagas';
import rootReducer from './ducks';

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composedEnhancers = compose(applyMiddleware(sagaMiddleware));

export const configureStore = () => {
  let store = createStore(persistedReducer, {}, composedEnhancers);
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
};

export const {store, persistor} = configureStore();
