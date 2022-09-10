import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {THEME_GREEN, WHITE} from '../../constants/Colors';
import {FontSize} from '../../constants/Fonts';

const Header = props => {
  const {title, onBack} = props;
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={onBack} activeOpacity={0.5}>
        <Text style={Styles.back}>{onBack?'back':''}</Text>
      </TouchableOpacity>

      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.title}>{}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: THEME_GREEN,
    alignItems: 'center',
    padding: 12,
    justifyContent:'space-between'
  },
  title: {
    color: WHITE,
    fontSize: FontSize.h4,
    fontWeight: '700',
    marginRight:10
  },
  back: {
    color: WHITE,
    fontSize: FontSize.h6,
    fontWeight: '500',
  },
});

export default Header;
