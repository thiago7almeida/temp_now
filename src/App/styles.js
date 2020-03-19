import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import ToggleSwitchReactNative from 'toggle-switch-react-native';

export const Container = styled(LinearGradient).attrs({
  colors: ['#48c6ef', '#6f86d6'],
})`
  flex: 1;
`;
export const Content = styled.SafeAreaView`
  margin: 18px;
  flex: 1;
`;
export const Title = styled.Text`
  font-family: Raleway;
  font-weight: 600;
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
`;
export const SubTitle = styled.Text`
  margin-top: 10px;
  font-family: Raleway;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`;
export const TitleWrapper = styled.View`
  flex: 1;
  align-items: center;
`;
export const TextTypeTemperature = styled.Text`
  font-family: Raleway;
  font-weight: 500;
  font-size: 16px;
  width: 33%;
`;

export const Options = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-height: 10%;
`;

export const ToggleSwitch = styled(ToggleSwitchReactNative).attrs({
  onColor: '#DDD',
})``;
