import api from './api';

export const getCity = ({latitude, longitude}) =>
  api.request({
    method: 'GET',
    url: `/location/search/?lattlong=${latitude},${longitude}`,
  });
export const getInfo = ({id}) =>
  api.request({
    method: 'GET',
    url: `/location/${id}`,
  });
