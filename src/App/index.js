import React from 'react';
import {View} from 'react-native';

import {Container, Content, TitleWrapper, Title, SubTitle} from './styles';

export default function App() {
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <Title>Cidade</Title>
          <SubTitle>18°</SubTitle>
        </TitleWrapper>
      </Content>
    </Container>
  );
}
