import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './src/App';
import {store, persistor} from './src/store';
import FlashMessage from 'react-native-flash-message';

export default function WeatherForecast() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      <FlashMessage position="top" />
    </>
  );
}
