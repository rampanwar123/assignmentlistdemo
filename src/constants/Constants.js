/**
 * Declare all the constant keys and their values here for using in throughout the app.
 */

import {Dimensions, Platform} from 'react-native';







const {width, height} = Dimensions.get('window');

export const MetrixConstant = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,

  //Margin
  BASE_MARGIN: width / 30,
  DOUBLE_BASE_MARGIN: width / 15,
  SMALL_MARGIN: width / 60,

  //Padding
  BASE_PADDING: width / 30,
  DOUBLE_BASE_PADDING: width / 15,
  SMALL_PADDING: width / 60,

  baseCurvePadding: 27,
  orderBaseCurvePadding: 40,

  BUTTON_HEIGHT: 50, //Button height
  INPUT_HEIGHT: 50, // Input height
  buttonBorderRadius: 6,

  paddingTop:
    Platform.OS === 'ios' ? (width === 896 ? 44 : height === 812 ? 40 : 20) : 0,
  HEADER_HEIGHT:
    Platform.OS === 'ios'
      ? Dimensions.get('window').height === 896
        ? 88
        : 64
      : 56,
  paddingBottom: Platform.OS === 'ios' ? 0 : 25,
  headerHeight: Platform.OS === 'ios' ? (height >= 812 ? 150 : 135) : 135,
  keyboardBehaviour: Platform.OS == 'ios' ? 'padding' : 'height',
  buttonHeight: 44, //Button height
  iphone_X_Series: Dimensions.get('window').height >= 812 ? true : false,
  iphone_5_Series: Dimensions.get('window').height <= 568 ? true : false,

  statusBarHeight: null,
};

