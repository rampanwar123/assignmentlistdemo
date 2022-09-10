/**
 * Declare all the fonts name and size here for using in throughout the app.
 */

import {MetrixConstant} from './Constants';

export const FontSize = {
  /** h1 = 30 */
  h1: MetrixConstant.iphone_5_Series ? 26 : 30,
  /** h2 = 24 */
  h2: MetrixConstant.iphone_5_Series ? 20 : 24,
  /** h3 = 22 */
  h3: MetrixConstant.iphone_5_Series ? 18 : 22,
  /** h4 = 20 */
  h4: MetrixConstant.iphone_5_Series ? 16 : 20,
  /** h5 = 18 */
  h5: MetrixConstant.iphone_5_Series ? 14 : 18,
  /** h6 = 16 */
  h6: MetrixConstant.iphone_5_Series ? 12 : 16,
  /** h7 = 26 */
  h7: MetrixConstant.iphone_5_Series ? 22 : 26,
  /** h8 = 40 */
  h8: MetrixConstant.iphone_5_Series ? 36 : 40,

  /** t1 = 14 */
  t1: MetrixConstant.iphone_5_Series ? 12 : 14,
  /** t2 = 12 */
  t2: MetrixConstant.iphone_5_Series ? 10 : 12,
  /** t3 = 10 */
  t3: MetrixConstant.iphone_5_Series ? 8 : 10,
  /** t4 = 8 */
  t4: MetrixConstant.iphone_5_Series ? 6 : 8,
};

export const FontFamily = {
  black: 'NunitoSans-Black',
  regular: 'NunitoSans-Regular',
  bold: 'NunitoSans-Bold',
  extra_bold: 'NunitoSans-ExtraBold',
  semi_bold: 'NunitoSans-SemiBold',
};
