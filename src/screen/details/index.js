import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header';
import {MetrixConstant} from '../../constants/Constants';
import {useNavigation} from '@react-navigation/native';
import {BLACK, THEME_GREEN} from '../../constants/Colors';
import {FontSize} from '../../constants/Fonts';
import TimeDistanceItem from './TimeDistance';
import Images from '../../constants/Images';

const Details = props => {
  const navigation = useNavigation();
  const {data} = props.route.params;

  const _renderRestaurantImages = () => {
    return (
      <View style={Styles.carouselView}>
        <FlatList
          data={data.images}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={Styles.itemContainer}>
        <Image source={{uri: item.url}} style={Styles.imageStyle} />
      </View>
    );
  };

  const _detailsView = () => {
    return (
      <View style={Styles.detailsView}>
        <Text style={Styles.title}>{data.title}</Text>
        <Text style={Styles.address}>{data.address}</Text>
        {_timeDistanceView()}
        <Text style={Styles.address}>{data.description}</Text>
      </View>
    );
  };

  const _timeDistanceView =()=>{
    return(
      <View style={Styles.timeDistanceView}>
     <TimeDistanceItem title='10AM-11PM' icon={Images.timemachine}/>
     <TimeDistanceItem title='10AM-11PM' icon={Images.location}/>
     <TimeDistanceItem title='10AM-11PM' icon={Images.delivery}/>
      </View>
    )
  }


  const _onBack = () => navigation.goBack();

  return (
    <SafeAreaView style={Styles.container}>
      <Header title="Restaurant Detail" onBack={_onBack} />
      <ScrollView  contentContainerStyle={{flex:1}}>
      {_renderRestaurantImages()}
      <View style={Styles.lengthContainer}>
        <View style={Styles.lengthView}>
          <Text style={{color:BLACK}}>{data.images.length}</Text>
        </View>
      </View>
      {_detailsView()}
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: MetrixConstant.SCREEN_WIDTH,
  },
  imageStyle: {width: '100%', height: '100%', resizeMode: 'cover'},
  carouselView: {height: '55%'},
  lengthView: {
    backgroundColor: THEME_GREEN,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 13,
    borderBottomEndRadius: 13,
  },
  lengthContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 15,
    marginTop: -20,
  },
  title: {
    fontSize: FontSize.h4,
    fontWeight: '700',
    color:BLACK
  },
  address: {
    fontSize: FontSize.t1,
    color: 'gray',
  },
  timeDistanceView:{
flexDirection:'row',
justifyContent:'space-around',
margin:10
  },
  detailsView:{
    marginHorizontal:10
  }
});

export default Details;
