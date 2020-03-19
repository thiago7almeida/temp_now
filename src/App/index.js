import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getLatLonSuccess, getLocationInfo} from '../store/ducks/info';

import InfoView from '../components/InfoView';
import MapView from '../components/MapView';

import {hasLocationPermission, getLocation} from '../services/Geolocation';

import {
  Container,
  Content,
  TitleWrapper,
  Title,
  SubTitle,
  Options,
} from './styles';

export default function App() {
  //reducer
  const {location, city} = useSelector(state => state.info);

  //actions
  const dispatch = useDispatch();
  const getLatLonAction = useCallback(
    value => dispatch(getLatLonSuccess(value)),
    [dispatch],
  );
  const getLocationAction = useCallback(
    value => dispatch(getLocationInfo(value)),
    [dispatch],
  );

  //life cicle
  useEffect(() => {
    async function GetLocation() {
      const {message, permission} = await hasLocationPermission();
      if (!permission) console.log(message);
      else {
        getLocation(
          position => getLatLonAction({location: position}),
          error => setError(error),
        );
      }
    }
    GetLocation();
  }, []);
  useEffect(() => {
    if (location !== null) {
      getLocationAction({
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
      });
    }
  }, [location]);
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <Title>{city?.title}</Title>
          <SubTitle>18°</SubTitle>
        </TitleWrapper>
        <MapView
          latitude={location?.coords?.latitude}
          longitude={location?.coords?.longitude}
        />
        <InfoView />
        <Options />
      </Content>
    </Container>
  );
}
