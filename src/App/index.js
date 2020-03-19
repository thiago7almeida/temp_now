import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

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
  TextTypeTemperature,
  ToggleSwitch,
} from './styles';
import {toFahrenheit} from '../services/Utils';

export default function App() {
  //functions
  const handleToggle = () => setIsOn(!isOn);

  //state
  const [isOn, setIsOn] = useState(false);

  //reducer
  const {location, city, info} = useSelector(state => state.info);

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
      if (!permission)
        showMessage({
          message: message,
          type: 'danger',
          icon: 'danger',
          duration: 3000,
        });
      else {
        getLocation(
          position => getLatLonAction({location: position}),
          error =>
            showMessage({
              message: error.message,
              type: 'danger',
              icon: 'danger',
              duration: 3000,
            }),
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
          <SubTitle>
            {info.length > 0 &&
              Math.round(
                isOn ? toFahrenheit(info[0].the_temp) : info[0].the_temp,
              )}
            °
          </SubTitle>
        </TitleWrapper>
        <MapView
          latitude={location?.coords?.latitude}
          longitude={location?.coords?.longitude}
        />
        <InfoView fahrenheit={isOn} data={info} />
        <Options>
          <TextTypeTemperature>Celsius</TextTypeTemperature>
          <ToggleSwitch large isOn={isOn} onToggle={handleToggle} />
          <TextTypeTemperature style={{textAlign: 'right'}}>
            Fahrenheit
          </TextTypeTemperature>
        </Options>
      </Content>
    </Container>
  );
}
