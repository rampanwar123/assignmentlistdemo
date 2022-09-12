import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  BackHandler,
  FlatList,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {THEME_GREEN, WHITE} from '../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {getRestaurantList} from '../../redux/actions/ListAction';
import ListItem from './ListItem';
import Header from '../../components/header';
import {getData, storeData} from '../../utils/LocalStorage';

const List = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    checkList();
  }, []);

  const checkList = () => {
    getData('list_data').then(value => {
      let jsonObject = JSON.parse(value);
      if (jsonObject) {
        console.log('jsonObjectjsonObject', jsonObject);
        setData(jsonObject?.data);
      } else {
        console.log('2');
        dispatch(getRestaurantList);
      }
    });
  };

  // const backHandler = BackHandler.addEventListener(
  //   "hardwareBackPress",
  //   BackHandler.exitApp()
  // );

  let {listData, loading} = useSelector(state => state.ListReducer);
  console.log('listData', listData);

  const _renderItem = ({item}) => {
    return <ListItem item={item} />;
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header title="Restaurant List" />
      <View style={Styles.listView}>
        {loading ? (
          <ActivityIndicator size={'large'} color={THEME_GREEN} />
        ) : null}
        <FlatList
          data={data?.length > 0 ? data : listData?.data}
          renderItem={_renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  listView: {
    marginTop: 10,
  },
});

export default List;
