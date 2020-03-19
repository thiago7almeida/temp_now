import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';

export const hasLocationPermission = async () => {
  const response = {permission: false, message: null};
  if (
    Platform.OS === 'ios' ||
    (Platform.OS === 'android' && Platform.Version < 23)
  ) {
    return {...response, permission: true};
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) return {...response, permission: true};

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED)
    return {...response, permission: true};

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    return {...response, message: 'Location permission denied by user.'};
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    return {...response, message: 'Location permission revoked by user.'};
  }

  return response;
};

export const getLocation = async (onSuccess, onError) => {
  Geolocation.getCurrentPosition(
    position => {
      onSuccess(position);
    },
    error => {
      onError(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
      distanceFilter: 50,
      forceRequestLocation: true,
    },
  );
};
