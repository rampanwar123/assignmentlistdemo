import React from 'react';
import List from '../screen/list';
import Details from '../screen/details';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/login';
import Splash from '../screen/splash/Splash';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RestaurantList" component={List} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MainStack;
