import React from 'react';
import {View, Text} from 'react-native';
import Moment from 'moment';
import {SvgUri} from 'react-native-svg';
import {Info, ItemInfo, TextInfo, Separator} from './styles';
import {toFahrenheit} from '../../services/Utils';

function InfoView({data, fahrenheit}) {
  return (
    <Info
      data={data}
      ItemSeparatorComponent={() => (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Separator />
        </View>
      )}
      keyExtractor={(item, index) => `${item.id}`}
      renderItem={({item, index, separators}) => (
        <ItemInfo>
          <TextInfo style={{textAlign: 'left'}}>
            {Moment(item.applicable_date).format('DD/MM')}
          </TextInfo>
          <TextInfo style={{textAlign: 'center'}}>
            {Math.round(
              fahrenheit ? toFahrenheit(item.the_temp) : item.the_temp,
            )}
            °
          </TextInfo>
          <SvgUri
            width="12%"
            height="100%"
            uri={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`}
          />
        </ItemInfo>
      )}
    />
  );
}
InfoView.defaultProps = {
  data: [],
  fahrenheit: false,
};
export default InfoView;
