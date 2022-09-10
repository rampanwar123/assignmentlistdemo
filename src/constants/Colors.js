// /**
//  * @providesModule Colors
//  */
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';
export const SHADOW = '#0000001A';
export const THEME_GREEN = '#00FA9A';

export const WhiteWithOpacity = opacityRange => {
  let opacity = opacityRange ? opacityRange : 1;
  return `rgba(255, 255, 255, ${opacity})`;
};
export const BlackWithOpacity = opacityRange => {
  let opacity = opacityRange ? opacityRange : 1;
  return `rgba(0, 0, 0, ${opacity})`;
};
