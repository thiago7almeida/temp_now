import styled from 'styled-components/native';

export const Info = styled.FlatList`
  border-radius: 10px;
  margin: 30px 0px;
  max-height: 27%;
  background-color: rgba(255, 255, 255, 0.45);
  elevation: 0.5;
`;
export const ItemInfo = styled.View`
  flex-direction: row;
  margin: 0px 10px;
  justify-content: space-between;
  padding: 10px 0px;
`;
export const TextInfo = styled.Text`
  font-family: Raleway;
  font-weight: 500;
  font-size: 16px;
  min-height: 22px;
`;
export const Separator = styled.View`
  height: 1px;
  width: 92%;
  background-color: rgba(255, 255, 255, 0.2);
`;
