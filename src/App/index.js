import React from 'react';
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
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <Title>Cidade</Title>
          <SubTitle>18°</SubTitle>
        </TitleWrapper>
        <MapView />
        <InfoView />
        <Options />
      </Content>
    </Container>
  );
}
