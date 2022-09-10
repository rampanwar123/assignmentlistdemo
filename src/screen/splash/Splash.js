import React, {useEffect} from 'react';
import {View,Text} from 'react-native';
import Realm from 'realm';
import {useNavigation} from '@react-navigation/native';
let realm;

const Splash = () => {
    const navigation=useNavigation()
  useEffect(() => {
    new Realm({
      path: 'UserDatabase.realm',
      schema: [
        {
          name: 'user_details',
          properties: {
            user_id: {type: 'int', default: 0},
            user_name: 'string',
            user_password: 'string',
          },
        },
      ],
    });

   
    checkUser()
  }, []);

  realm = new Realm({path: 'UserDatabase.realm'});

  const localUserData = () => {
    realm.write(() => {
      var ID =
        realm.objects('user_details').sorted('user_id', true).length > 0
          ? realm.objects('user_details').sorted('user_id', true)[0].user_id + 1
          : 1;
      realm.create('user_details', {
        user_id: ID,
        user_name: 'test@gmail.com',
        user_password: 'test@123',
      });
    });
  };

  const checkUser = ()=>{
    var user_details = realm.objects('user_details');
    console.log('user_details',user_details)
   if(user_details.length>0){
    navigation.navigate('RestaurantList')
   }
   else{
    localUserData()
    navigation.navigate('Login')
   }
  }

  return (
      <View />
     
  );
};

export default Splash
