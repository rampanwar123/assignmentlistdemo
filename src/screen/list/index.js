import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View, Text,ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {THEME_GREEN, WHITE} from '../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {getRestaurantList} from '../../redux/actions/ListAction';
import ListItem from './ListItem';
import Header from '../../components/header';

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantList);
  }, []);

  let {listData,loading} = useSelector(state => state.ListReducer);

  const _renderItem = ({item}) => {
    return <ListItem item={item} />;
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header title="Restaurant List" />
      <View style={Styles.listView}>
        {loading?<ActivityIndicator size={'large'} color={THEME_GREEN}/>:null}
        <FlatList data={listData?.data} renderItem={_renderItem} />
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
