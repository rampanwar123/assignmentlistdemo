import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getData, storeData} from '../../utils/LocalStorage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    localUserData();
  }, []);

  const localUserData = () => {
    getData('isFirstTime').then(value => {
      let jsonObject = JSON.parse(value);
      console.log('isFirstTime', jsonObject);
      if (jsonObject?.isFirstTime === true) {
        checkUser();
      } else {
        console.log('1');
        let data = {
          email: 'test@gmail.com',
          password: 'test@123',
        };
        storeData('login_user', JSON.stringify(data));
        navigation.navigate('Login');
      }
    });
  };

  const checkUser = () => {
    getData('login_user').then(value => {
      let jsonObject = JSON.parse(value);
      if (jsonObject) {
        console.log('jsonObject', jsonObject);
        navigation.navigate('RestaurantList');
      } else {
        navigation.navigate('Login');
      }
    });
  };

  return (
    <View>
      <Text>rgjdfkgdfhgjk</Text>
    </View>
  );
};

export default Splash;
