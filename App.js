import React, {useEffect} from 'react';
import Route from './src/navigation/Route';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import configureStore from './src/redux/Store';

const {store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Route />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
