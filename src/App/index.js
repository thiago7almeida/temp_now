import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getLatLon} from '../store/ducks/info';

import InfoView from '../components/InfoView';
import MapView from '../components/MapView';

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
  const {location} = useSelector(state => state.info);

  //actions
  const dispatch = useDispatch();
  const getLocation = useCallback(value => dispatch(getLatLon()), [dispatch]);

  //life cicle
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <Title>Cidade</Title>
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
