import React from 'react';
import {Marker} from 'react-native-maps';

import {Map} from './styles';

function MapView({latitude, longitude}) {
  return (
    <Map
      rotateEnabled={true}
      scrollEnabled={false}
      zoomEnabled={false}
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{
          latitude,
          longitude,
        }}
      />
    </Map>
  );
}
MapView.defaultProps = {
  latitude: 37.78825,
  longitude: -122.4324,
};
export default MapView;
