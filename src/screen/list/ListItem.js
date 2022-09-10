import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Rating from '../../components/rating';
import {BLACK, SHADOW, WHITE} from '../../constants/Colors';
import Images from '../../constants/Images';
import {useNavigation} from '@react-navigation/native';

const ListItem = props => {
  const navigation = useNavigation();
  const {item} = props;

  const _onPressItem = () => {
    navigation.navigate('Details', {data: item});
  };

  return (
    <TouchableOpacity
      style={Styles.container}
      activeOpacity={0.5}
      onPress={_onPressItem}>
      <View style={Styles.imageTitleView}>
        <Image source={Images.ic_restaurant} style={Styles.bannerImage} />
        <View style={Styles.description}>
          <Text style={{color:BLACK}}>{item.title}</Text>
          <Rating
            disabled={true}
            rating={item.rating}
            count={5}
            opacity={true}
            starSize={13}
            spacing={3}
            fullStar={Images.ic_star}
          />
        </View>
      </View>
      <TouchableOpacity style={Styles.iconButton}>
        <Image
          source={Images.ic_map_pin_white}
          style={{width: 20, height: 20}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: WHITE,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    // IOS platform
    // shadowColor: SHADOW,
    // shadowOffset: {width: 2, height: 2},
    // shadowOpacity: 5,
    // shadowRadius: 5,
    elevation: 3,
  },
  imageTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerImage: {width: 50, height: 50, borderRadius: 5},
  iconButton: {
    backgroundColor: '#00FA9A',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 6,
  },
  description: {marginHorizontal: 15, alignItems: 'flex-start'},
});

export default ListItem;
