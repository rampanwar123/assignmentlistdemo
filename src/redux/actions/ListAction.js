import {storeData} from '../../utils/LocalStorage';

export const getRestaurantList = dispatch => {
  dispatch({
    type: 'loading',
    payload: true,
  }),
    setTimeout(() => {}, 2000);
  fetch('http://205.134.254.135/~mobile/interview/public/api/restaurants_list')
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: 'list',
        payload: json,
      });
      storeData('list_data', JSON.stringify(json));
    });
  dispatch({
    type: 'loading',
    payload: false,
  });
};
